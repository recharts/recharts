import{R as e}from"./iframe-mx_m0Bbx.js";import{R as c}from"./zIndexSlice-DzRj0O2j.js";import{C as d}from"./ComposedChart-BENGvYsD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D2pbrDB5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C4NetDSi.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./axisSelectors-BCNbmsqC.js";import"./d3-scale-Dkhn0JVn.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./Layer-CIGRgmJf.js";import"./AnimatedItems-CxqbLrvD.js";import"./Label-CTtz2nFH.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./ZIndexLayer-DoWBLOas.js";import"./useAnimationId-B1RQqc1z.js";import"./ActivePoints-p8w8Ckwa.js";import"./Dot-CG3pFr9Q.js";import"./types-CGXKV1tr.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getRadiusAndStrokeWidthFromDot-e5MUZgSd.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./Curve-8KyVkyQb.js";import"./step-DzD8K2Hy.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CIKPVBBJ.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
