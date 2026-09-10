import{R as t}from"./iframe-UgRt0vcp.js";import{a as p}from"./isWellBehavedNumber-ysV-_8Aq.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DMQN47zq.js";import{R as T}from"./zIndexSlice-B7qjUnDG.js";import{C as M}from"./CartesianGrid-CLHuENG3.js";import{X as $}from"./XAxis-4W0ht619.js";import{Y as I}from"./YAxis-CJZXqV3k.js";import{L as O}from"./Legend-SEzvkhHd.js";import{T as W}from"./Tooltip-DArRYZES.js";import{L as C}from"./Line-Dipve1CO.js";import{C as X}from"./Curve-BaJYpKaM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXcWlbHp.js";import"./RechartsWrapper-EuqqM12a.js";import"./axisSelectors-DIh-l85l.js";import"./throttle-DuwfTuib.js";import"./index-Bv-jl5LW.js";import"./index-Bvm9MNt8.js";import"./d3-scale-Cn-9twYV.js";import"./index-BUuQQxxl.js";import"./index-BtCdhKy_.js";import"./renderedTicksSlice-rspC5CNs.js";import"./index-NRyuBWjq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DoGcO1A-.js";import"./chartDataContext-BKXebmD7.js";import"./CategoricalChart-BbYkYnOT.js";import"./CartesianAxis-RT1RuzF2.js";import"./Layer-C1js-4J0.js";import"./Text-CIcS1Cht.js";import"./DOMUtils-hZ-h7K-C.js";import"./useId-nYKyJk56.js";import"./useBackwardsCompatibleTheme-DJK5Z4IB.js";import"./Label-Ct2bC8Rh.js";import"./ZIndexLayer-A1V94IPq.js";import"./types-BQX4mfvu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DD6r1Zt-.js";import"./symbol-C00MPWxj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BV51zAtA.js";import"./uniqBy-C0AvOEm-.js";import"./iteratee-BGbr-Qh6.js";import"./useAnimationId-DPVBY7S8.js";import"./Cross-BOwfVrty.js";import"./Rectangle-f5SbKkB1.js";import"./util-Dxo8gN5i.js";import"./Sector-ySzx3TZd.js";import"./AnimatedItems-BpS1OD2e.js";import"./ActivePoints-BWaxPFAB.js";import"./Dot-DphG9sPw.js";import"./RegisterGraphicalItemId-Cu5milgY.js";import"./ErrorBarContext-g5uku85c.js";import"./GraphicalItemClipPath-C-zprDgr.js";import"./SetGraphicalItem-1hTkIljj.js";import"./getRadiusAndStrokeWidthFromDot-CKTCh4hG.js";import"./ActiveShapeUtils-B_uanDrb.js";import"./useGraphicalItemIdentity-DyOG4GgF.js";import"./step-BAtXOj-E.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
