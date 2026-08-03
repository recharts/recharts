import{R as e}from"./iframe-w1sUw1VE.js";import{R as c}from"./zIndexSlice-BFtIIbIH.js";import{C as d}from"./ComposedChart-BjXbyHB1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DGiLJC75.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9uSjnkRJ.js";import"./index-CKtl8pQB.js";import"./index-JAlJc66Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DsVHMq00.js";import"./isWellBehavedNumber-B6HqUKYK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kdFU-RZ0.js";import"./index-B50wbS8k.js";import"./index-DREvHpCt.js";import"./renderedTicksSlice-BYSsRx-Z.js";import"./axisSelectors-Fjy06-Ct.js";import"./d3-scale-BNSttRgc.js";import"./CartesianChart-Cpc3KnxA.js";import"./chartDataContext-Qn0Ey9bz.js";import"./CategoricalChart-DPuU_nkZ.js";import"./Layer-B0FPP_Ev.js";import"./AnimatedItems-BO3fZMy0.js";import"./Label-DclIafX4.js";import"./Text-BMcE5w5g.js";import"./DOMUtils-CT4eanyO.js";import"./ZIndexLayer-BmjcQumE.js";import"./useAnimationId-oodeuVFJ.js";import"./ActivePoints-DgvIxblY.js";import"./Dot-0Sa9Tyfc.js";import"./types-BKQwKiAc.js";import"./RegisterGraphicalItemId-BXlJHdat.js";import"./GraphicalItemClipPath-DIJRkSkT.js";import"./SetGraphicalItem-DINcEBZn.js";import"./graphicalItemIdentity-B_W-R4bm.js";import"./ActiveShapeUtils-D_EfEkHZ.js";import"./Curve-C6IEG5wt.js";import"./step-DwoRKPdQ.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-ws5do87s.js";import"./graphicalItemSelectors-BVXGcCTk.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
