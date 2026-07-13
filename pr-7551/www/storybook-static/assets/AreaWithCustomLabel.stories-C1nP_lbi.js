import{R as e}from"./iframe-DeA6Jpe3.js";import{R as c}from"./zIndexSlice-BC0f17EQ.js";import{C as d}from"./ComposedChart-Bx8jkPS5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BOQzqkTs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrUA5muc.js";import"./index-COu95pDD.js";import"./index-Cgi5iiaO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CSkrQNmh.js";import"./isWellBehavedNumber-QapkByze.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B64-BdAv.js";import"./index-DH7_6A6k.js";import"./index-_OzwQHli.js";import"./renderedTicksSlice-BS64flHf.js";import"./axisSelectors-D1wvQQnO.js";import"./d3-scale-BpDmqGQL.js";import"./CartesianChart-BM30Ht3L.js";import"./chartDataContext-DUEOLv6k.js";import"./CategoricalChart-BGS1Syzx.js";import"./Layer-EcnCd1Gq.js";import"./AnimatedItems-C9_zvyTE.js";import"./Label-DxF7lRqe.js";import"./Text-D2SjxJqk.js";import"./DOMUtils-Bt_ISucd.js";import"./ZIndexLayer-B9FDBqTJ.js";import"./useAnimationId-DmZXjvo1.js";import"./ActivePoints-DXrZqI9p.js";import"./Dot-BnJj13Wl.js";import"./types-Dc_zINiL.js";import"./RegisterGraphicalItemId-DYqiPt6w.js";import"./GraphicalItemClipPath-BPKm-IHy.js";import"./SetGraphicalItem-D9c-Ll1Q.js";import"./getRadiusAndStrokeWidthFromDot-JO35KbEr.js";import"./ActiveShapeUtils-DhlcDB3a.js";import"./Curve-hairJGsw.js";import"./step-cipjXRUD.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BdqD8UUE.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
