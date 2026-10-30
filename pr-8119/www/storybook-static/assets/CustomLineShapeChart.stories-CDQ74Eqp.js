import{R as t}from"./iframe-D4SWC0C9.js";import{R as D,l as p}from"./zIndexSlice-DtLu2rz0.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C5G2J67G.js";import{C as M}from"./CartesianGrid-B0MTC305.js";import{X as $}from"./XAxis-DY95kjca.js";import{Y as I}from"./YAxis-DZiEXhVb.js";import{L as O}from"./Legend-DVZRLGV5.js";import{T as W}from"./Tooltip-CKtfPjFs.js";import{L as f}from"./Line-BMXJqgb8.js";import{C as X}from"./Curve-CLAbzDX3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./throttle-i1uEXwfS.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./RechartsWrapper-B-nLjLBG.js";import"./axisSelectors-D7bj-nZi.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CqqO4xMX.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./CartesianAxis-jJfvsanR.js";import"./Layer--YLSv_ie.js";import"./Text-K3oqQ0qr.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./Label-B4GKK3W-.js";import"./types-BULmlw12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-mjJ7TtB9.js";import"./symbol-IW8UYWs4.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C6BynYXf.js";import"./dataEntryStyles-Df562HAt.js";import"./useElementOffset-BNAtca7y.js";import"./uniqBy-9w4q5yQd.js";import"./iteratee-DZT4M3pu.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DKXEwRJj.js";import"./Cross-CSn-JXVK.js";import"./Rectangle-C8mkpCGv.js";import"./util-Dxo8gN5i.js";import"./Sector-C172RoTQ.js";import"./LabelList-D_z7ECQv.js";import"./ActivePoints-D3cp_ck3.js";import"./Dot-fLjTiyXC.js";import"./activeStyles-DGXStsvL.js";import"./ErrorBarContext-CkfaNLfH.js";import"./SetGraphicalItem-CmNEMHt3.js";import"./getRadiusAndStrokeWidthFromDot-DOd7rr-G.js";import"./ActiveShapeUtils-CKN1RXI0.js";import"./useEffectiveDataKey-B-O25Qiu.js";import"./step-DJAY54DS.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
