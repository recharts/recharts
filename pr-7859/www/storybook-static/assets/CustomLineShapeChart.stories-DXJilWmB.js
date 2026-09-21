import{R as t}from"./iframe-CgTT5dPO.js";import{a as p}from"./isWellBehavedNumber-BWfrrYUp.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CFFF8bvn.js";import{R as T}from"./zIndexSlice-CPGUCnGo.js";import{C as M}from"./CartesianGrid-B-SK66Uf.js";import{X as $}from"./XAxis-ClmjXtMB.js";import{Y as I}from"./YAxis-DSfP3iJV.js";import{L as O}from"./Legend-9ACYjgET.js";import{T as W}from"./Tooltip-t8L-cwt_.js";import{L as C}from"./Line-B2uAqrSV.js";import{C as X}from"./Curve-cyeBNEBX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CKA35xz0.js";import"./RechartsWrapper-B51pwKIk.js";import"./axisSelectors-Gtv_llo9.js";import"./throttle-BMr0TIll.js";import"./index-yjPGP_Pi.js";import"./index-DsTCyvOd.js";import"./d3-scale-oJuzrlfE.js";import"./index-9dlMxjgk.js";import"./index-BDFV0rCg.js";import"./renderedTicksSlice-B7hU_9zD.js";import"./index-Db1ep0ty.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-P3XUrVp3.js";import"./chartDataContext-Cp4ZgLCD.js";import"./CategoricalChart-Ce5ExZbX.js";import"./CartesianAxis-1GG6rVOn.js";import"./Layer-CviKKqfs.js";import"./Text-BTX7KMwr.js";import"./DOMUtils-DNAAiWqJ.js";import"./useId-C9Sf9QRu.js";import"./useBackwardsCompatibleTheme-BnQi9_9k.js";import"./Label-DgIJd16K.js";import"./ZIndexLayer-CL4lnoUk.js";import"./types-DZAseBJP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-858ix6UN.js";import"./symbol-Di9ULjRu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-E-WECx4Q.js";import"./uniqBy-8m_J3yMU.js";import"./iteratee-BZZIIBc5.js";import"./useAnimationId-D6-p5R60.js";import"./Cross-C0bVdUJm.js";import"./Rectangle-huBGhNer.js";import"./util-Dxo8gN5i.js";import"./Sector-DExrbWoI.js";import"./AnimatedItems-mZXv8WCL.js";import"./ActivePoints-Bnc15lgq.js";import"./Dot-DH9TpVyz.js";import"./RegisterGraphicalItemId-DeFFmfLc.js";import"./ErrorBarContext-CmOtwBbz.js";import"./GraphicalItemClipPath-qWvJymnR.js";import"./SetGraphicalItem-BFHpZd6Q.js";import"./getRadiusAndStrokeWidthFromDot-DgPOWv_U.js";import"./ActiveShapeUtils-CCEW4taa.js";import"./useGraphicalItemIdentity-CKmqq4Ws.js";import"./step-D1irN9pp.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
