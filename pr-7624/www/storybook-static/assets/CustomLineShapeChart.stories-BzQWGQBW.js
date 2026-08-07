import{R as t}from"./iframe-DQ5pdRpT.js";import{a as s}from"./isWellBehavedNumber-DO3SFpF7.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-ypURthnM.js";import{R as T}from"./zIndexSlice-DQojUU3D.js";import{C as M}from"./CartesianGrid-2P83tjAO.js";import{X as $}from"./XAxis-BbDJVinv.js";import{Y as I}from"./YAxis-B3S1-9pB.js";import{L as O}from"./Legend-DJCD1p7S.js";import{T as W}from"./Tooltip-CTEkWRqt.js";import{L as C}from"./Line-B8q4YFfc.js";import{C as X}from"./Curve-Co2BFljk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2j2eShk.js";import"./RechartsWrapper--EivWNjp.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./throttle-j7vxqIWJ.js";import"./axisSelectors-BLoeM8Ql.js";import"./d3-scale-CzelId51.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";import"./CartesianAxis-9E3w2iOb.js";import"./Layer-BrLbSCb2.js";import"./Text-BbwznCj8.js";import"./DOMUtils-3opGu7KJ.js";import"./Label-ogcMQvX_.js";import"./ZIndexLayer-LAqpTUNY.js";import"./types-DwD8FSIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DYFm3WDH.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CEQie_2C.js";import"./symbol-CBHGzcW_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXvuwe-z.js";import"./uniqBy-Ccyf9NaN.js";import"./iteratee-DbAGhbRW.js";import"./useAnimationId-Bjim9SiW.js";import"./Cross-mqWdaTzN.js";import"./Rectangle-BmXaPyvq.js";import"./util-Dxo8gN5i.js";import"./Sector-CZrHPxfX.js";import"./AnimatedItems-Bmg4d13Y.js";import"./ActivePoints-DNNEApCY.js";import"./Dot-CSL_Jnkg.js";import"./RegisterGraphicalItemId-gNTwGCiB.js";import"./ErrorBarContext-PCXvp0W_.js";import"./GraphicalItemClipPath-Cbyv8QGz.js";import"./SetGraphicalItem-BopL2iik.js";import"./graphicalItemIdentity-DhpqhoFM.js";import"./ActiveShapeUtils-ZRRc_Clb.js";import"./step-BcS8HbZG.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const zt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,zt as __namedExportsOrder,qt as default};
