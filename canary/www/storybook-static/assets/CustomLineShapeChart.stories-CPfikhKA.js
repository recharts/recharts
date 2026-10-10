import{R as t}from"./iframe-CMIMGlWj.js";import{a as p}from"./isWellBehavedNumber-BbJa2uqW.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-8HUEVLPw.js";import{R as T}from"./zIndexSlice-wuzXiITR.js";import{C as M}from"./CartesianGrid-3hhx0pRp.js";import{X as $}from"./XAxis-D-eD-ZKH.js";import{Y as I}from"./YAxis-QT5bDNHN.js";import{L as O}from"./Legend-DfAkJ6Nt.js";import{T as W}from"./Tooltip-Bfyf8YiS.js";import{L as C}from"./Line-CNg6PROS.js";import{C as X}from"./Curve-D4pLn_ye.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./axisSelectors-Bmc6RJCp.js";import"./throttle-BCA5qR4E.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./d3-scale-CuGTTQPB.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./renderedTicksSlice-C4raIVaG.js";import"./index-C3fJL_AW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Layer-DEZqQRHO.js";import"./Text-BN1TaMnw.js";import"./pageBackground-DO_pzhaN.js";import"./useId-DTR3y050.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./Label-BNdyp9o_.js";import"./ZIndexLayer-D_EAZsge.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BGbhxLkB.js";import"./symbol-B2_p0roD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFwzirRX.js";import"./uniqBy-DsRHxoCo.js";import"./iteratee-Xpq30y0i.js";import"./useAnimationId-x76x2OiL.js";import"./Cross-pntYxpiG.js";import"./Rectangle-BZX9uaas.js";import"./util-Dxo8gN5i.js";import"./Sector-DirISh84.js";import"./AnimatedItems-BjpwlZ4G.js";import"./ActivePoints-pcKLb4wT.js";import"./Dot-N3GD5m7g.js";import"./dataEntryStyles-TQ5R--o5.js";import"./ErrorBarContext-qJfLExSm.js";import"./GraphicalItemClipPath-BGm7g6KG.js";import"./SetGraphicalItem-DP6zOJ07.js";import"./getRadiusAndStrokeWidthFromDot-B-tnlovt.js";import"./ActiveShapeUtils-1w8yv5Vh.js";import"./useGraphicalItemIdentity-9tRqDWZI.js";import"./step-C3qFiRpn.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
