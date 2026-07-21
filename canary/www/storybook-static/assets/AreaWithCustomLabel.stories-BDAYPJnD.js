import{R as e}from"./iframe-2CSQwnzh.js";import{R as c}from"./zIndexSlice-BFAyLu2K.js";import{C as d}from"./ComposedChart-Drp8NLPv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CimHmF4p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D6AnBAnr.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./index-DiEzMPwb.js";import"./renderedTicksSlice-HMFum7ql.js";import"./axisSelectors-svppWMH6.js";import"./d3-scale-Dt9cpg9w.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./CategoricalChart-DtXBMgKk.js";import"./Layer-whPw80AU.js";import"./AnimatedItems-Ba6tXj_A.js";import"./Label-BgiiW0df.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./useAnimationId-CkCcxDPT.js";import"./ActivePoints-fb37GVPw.js";import"./Dot-D2O1VtDH.js";import"./types-Co_C0j8x.js";import"./RegisterGraphicalItemId-D-cwWngY.js";import"./GraphicalItemClipPath-DcZNtOEm.js";import"./SetGraphicalItem-DiGKkNAO.js";import"./getRadiusAndStrokeWidthFromDot-DvI-6mn5.js";import"./ActiveShapeUtils-CiureFp6.js";import"./Curve-BVeBGaCZ.js";import"./step-cLfMjHgU.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CLyvKTVM.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
