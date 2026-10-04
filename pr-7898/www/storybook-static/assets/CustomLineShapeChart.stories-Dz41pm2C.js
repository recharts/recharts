import{R as t}from"./iframe-Ek26OKJE.js";import{a as p}from"./isWellBehavedNumber-C3YqTazs.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B15OONtS.js";import{R as T}from"./zIndexSlice-Cb7AOhUN.js";import{C as M}from"./CartesianGrid-BHY1kSwY.js";import{X as $}from"./XAxis-BnPYeIW7.js";import{Y as I}from"./YAxis-DEoqYThk.js";import{L as O}from"./Legend-Cz3kEQrZ.js";import{T as W}from"./Tooltip-F2mg1-7E.js";import{L as C}from"./Line-B_mB8jRL.js";import{C as X}from"./Curve-8tFNvOBV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DikHbtvd.js";import"./RechartsWrapper-B_5MzBNC.js";import"./axisSelectors-BZyUnxor.js";import"./throttle-nAaWLAvW.js";import"./index-Bhq43Y8T.js";import"./index-CH5hGN9X.js";import"./d3-scale-Di7qtVT_.js";import"./index-CVfvjw4V.js";import"./index-CddS4NP_.js";import"./renderedTicksSlice-Bw9pF84S.js";import"./index-tmDn5Ue5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUYt3N23.js";import"./chartDataContext-q8RiqEic.js";import"./CategoricalChart-Co9RgHLu.js";import"./CartesianAxis-D3cjFJua.js";import"./Layer-DRl71Sg_.js";import"./Text-DbwWqm58.js";import"./DOMUtils-BY_uPlRS.js";import"./useId-rsWHAn-D.js";import"./useBackwardsCompatibleTheme-Drt73puE.js";import"./Label-Bl-xJBza.js";import"./ZIndexLayer-CR_MqsJe.js";import"./types-USIGaiIt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B5r7o9db.js";import"./symbol-CFHkB0SW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5V_fM0x.js";import"./uniqBy-Cj7_lSTC.js";import"./iteratee-DmOgoTF5.js";import"./useAnimationId-CwN306xk.js";import"./Cross-DN6pFmsJ.js";import"./Rectangle-9wtqsi7b.js";import"./util-Dxo8gN5i.js";import"./Sector-DSsbKQvu.js";import"./AnimatedItems-B7V8aYKV.js";import"./ActivePoints-CnBuc0OH.js";import"./Dot-CSgA8HWq.js";import"./RegisterGraphicalItemId-DmFzdfAb.js";import"./ErrorBarContext-Cn_05uOu.js";import"./GraphicalItemClipPath-BeXUWsOJ.js";import"./SetGraphicalItem-OIwhrDsV.js";import"./getRadiusAndStrokeWidthFromDot-Dg98J8GV.js";import"./ActiveShapeUtils-AftK0wfE.js";import"./useGraphicalItemIdentity-CLabRpL-.js";import"./step-DzHhz21P.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
