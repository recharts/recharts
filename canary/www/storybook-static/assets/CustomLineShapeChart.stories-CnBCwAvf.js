import{R as t}from"./iframe-rIGtWy7o.js";import{R as D,l as p}from"./zIndexSlice-eSFvIDPB.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bx9iwnP7.js";import{C as M}from"./CartesianGrid-KlYM2iOH.js";import{X as $}from"./XAxis-DpQ4g3Lr.js";import{Y as I}from"./YAxis-CD9Zrxmn.js";import{L as O}from"./Legend-Dz8VLuuY.js";import{T as W}from"./Tooltip-DkrQRKNg.js";import{L as f}from"./Line-BfyEqFnX.js";import{C as X}from"./Curve-DqTam_xv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CESzkdGA.js";import"./throttle-BAKkGKnI.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./RechartsWrapper-CnGTSvJE.js";import"./axisSelectors-DWDjUcOc.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BuxsQdRE.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./CartesianAxis-DicS6pKh.js";import"./Layer-BDOLwd71.js";import"./Text-CUOAySYE.js";import"./ZIndexLayer-BQOJSgP1.js";import"./Label-BEKXXJOd.js";import"./types-BNwRi5Vr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DvWu6ax_.js";import"./uniqBy-C8XTS8UB.js";import"./iteratee-ByPZHGAt.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BWpujR0E.js";import"./Cross-DCLXQRie.js";import"./Rectangle-DFHnm19R.js";import"./util-Dxo8gN5i.js";import"./Sector-BF6ZW7n9.js";import"./getRadiusAndStrokeWidthFromDot-DW8ZW_Lt.js";import"./dataEntryStyles-BBWs-HQj.js";import"./ActivePoints-B88CEUU0.js";import"./Dot-hlrtitgM.js";import"./activeStyles-CzQ969KV.js";import"./ErrorBarContext-B8qTxBlT.js";import"./SetGraphicalItem-iESSYU5M.js";import"./ActiveShapeUtils-CybnivgX.js";import"./useEffectiveDataKey-DGGEUFr6.js";import"./step-CBJGjOOI.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
