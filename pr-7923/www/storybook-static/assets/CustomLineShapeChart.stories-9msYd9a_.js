import{R as t}from"./iframe-BMzdo2OO.js";import{a as p}from"./isWellBehavedNumber-BxxKk3_X.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Dxw0wxPn.js";import{R as T}from"./zIndexSlice-ChqivVgc.js";import{C as M}from"./CartesianGrid-Da3I8a2m.js";import{X as $}from"./XAxis-D0FZw3tk.js";import{Y as I}from"./YAxis-BNMn58Qu.js";import{L as O}from"./Legend-Drlr6PEv.js";import{T as W}from"./Tooltip-BCXNVYKW.js";import{L as C}from"./Line-HvZ-B3uy.js";import{C as X}from"./Curve--AxPXvQm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./RechartsWrapper-DZyZLCSd.js";import"./axisSelectors-DePv-gjT.js";import"./throttle-Bn5L-Spy.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./CartesianAxis-BwqV9jtY.js";import"./Layer-DI_tMp3J.js";import"./Text-BUhrLoyp.js";import"./DOMUtils-CENQr-dm.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./Label-DXGFYQ6y.js";import"./ZIndexLayer-J0q0oOXM.js";import"./types-XidxuGSX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bs3oLubR.js";import"./symbol-B1gI76t2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNLeBMxi.js";import"./uniqBy-DlBrbasH.js";import"./iteratee-k4aeFlqG.js";import"./useAnimationId-DMkWUgfv.js";import"./Cross-BtRQT9ij.js";import"./Rectangle-CYGVySvu.js";import"./util-Dxo8gN5i.js";import"./Sector-dxcau_Jz.js";import"./AnimatedItems-aWQxtrPp.js";import"./ActivePoints-DbFNvnJX.js";import"./Dot-C8FkbxSc.js";import"./RegisterGraphicalItemId-CdkGqZbg.js";import"./ErrorBarContext-Dvnk9Osp.js";import"./GraphicalItemClipPath-jODxuvX2.js";import"./SetGraphicalItem-fUYBwl3z.js";import"./getRadiusAndStrokeWidthFromDot-CrQ8YxTR.js";import"./ActiveShapeUtils-P-2_LOiD.js";import"./useGraphicalItemIdentity-p0tnB9lX.js";import"./step-C6IWo9eW.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
