import{R as t}from"./iframe-DsTklGd_.js";import{a as p}from"./isWellBehavedNumber-CnKVaaX2.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BdsV4prH.js";import{R as T}from"./zIndexSlice-BtbFiuZY.js";import{C as M}from"./CartesianGrid-Dey6FAmb.js";import{X as $}from"./XAxis-CCdXtDxp.js";import{Y as I}from"./YAxis-BOZCya1S.js";import{L as O}from"./Legend-DM9P43pw.js";import{T as W}from"./Tooltip-CpWUFYTg.js";import{L as C}from"./Line-BpWz7ZGo.js";import{C as X}from"./Curve-BNsFHGFj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./axisSelectors-DYheqAyK.js";import"./throttle-DdQ2CShf.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./d3-scale-m8FOg4h4.js";import"./index-DPiom88R.js";import"./index-DwiZHk90.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-blk6unfu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./CartesianAxis-CPZLjXk4.js";import"./Layer-CZKgQj5k.js";import"./Text-BbSBkVqk.js";import"./pageBackground-BHVKZknb.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./Label-D9BiQh3x.js";import"./ZIndexLayer-DFFwnPWa.js";import"./types-CPppnSS0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C05NrL44.js";import"./symbol-BCG62I2C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uGLvwzdi.js";import"./uniqBy-Mv52plNv.js";import"./iteratee-Dj6SgMgn.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DDiQkgxw.js";import"./Cross-B_kNLhXT.js";import"./Rectangle-VOQBKS27.js";import"./util-Dxo8gN5i.js";import"./Sector-CgGX8g4n.js";import"./activeStyles-CRt5O3EE.js";import"./dataEntryStyles-Cfp8oK59.js";import"./ActivePoints-B7jiKkUq.js";import"./Dot-DzYpmtjj.js";import"./ErrorBarContext-BpgUGbiX.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getRadiusAndStrokeWidthFromDot-D7P1mq2m.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./useEffectiveDataKey-yxNF_elp.js";import"./step-DT1sNEdD.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
