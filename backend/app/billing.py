import os
import stripe
from fastapi import APIRouter, Depends, HTTPException
from . import auth

router = APIRouter(tags=["billing"])

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

# Live Price ID as requested by lead
PREMIUM_PRICE_ID = "price_1TlypUE99wZ7OMORfKh2GIZn"

@router.post("/create-checkout-session")
async def create_checkout_session(current_user: dict = Depends(auth.get_current_user)):
    try:
        # Create a checkout session for the premium subscription
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    "price": PREMIUM_PRICE_ID,
                    "quantity": 1,
                },
            ],
            mode="subscription",
            success_url="http://localhost:3000/dashboard",
            cancel_url="http://localhost:3000/pricing",
            customer_email=current_user["email"],
            metadata={
                "user_id": current_user["id"]
            }
        )
        return {"url": checkout_session.url}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
