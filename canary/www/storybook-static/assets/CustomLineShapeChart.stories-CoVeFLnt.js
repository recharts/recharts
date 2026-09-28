import{R as t}from"./iframe-DVTI7asB.js";import{a as p}from"./isWellBehavedNumber-D3Ee2F4O.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B7HL1Emj.js";import{R as T}from"./zIndexSlice-VrE65LwJ.js";import{C as M}from"./CartesianGrid-DnLnRX8G.js";import{X as $}from"./XAxis-B8cGJGN2.js";import{Y as I}from"./YAxis-B0eGMGZi.js";import{L as O}from"./Legend-KbPbtBqc.js";import{T as W}from"./Tooltip-B8SR9jQq.js";import{L as C}from"./Line-DHWvjFGt.js";import{C as X}from"./Curve-ad1Bykff.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Brh9VJsQ.js";import"./RechartsWrapper-0XjKEbs7.js";import"./axisSelectors-BpjWm-Lu.js";import"./throttle-BWtzmmFP.js";import"./index-CBeOLa_K.js";import"./index-x2lkdleK.js";import"./d3-scale-CTgt3q-T.js";import"./index-Dxlfd81A.js";import"./index-BME0E5Ea.js";import"./renderedTicksSlice-Dm0DClKF.js";import"./index-B1fyioQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-TlzU5q-y.js";import"./chartDataContext-5tueJF_N.js";import"./CategoricalChart-DDdawTFM.js";import"./CartesianAxis-B7c0SFW_.js";import"./Layer-CKEADoVi.js";import"./Text-XQRKlDnX.js";import"./DOMUtils--MlKRlg5.js";import"./useId-D-envRVe.js";import"./useBackwardsCompatibleTheme-CTYeO19p.js";import"./Label-C5sDum5_.js";import"./ZIndexLayer-MKguLFMj.js";import"./types-BbyfnRjt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BiOVdGD0.js";import"./symbol-ESR152s0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-rrBJTLuZ.js";import"./uniqBy-BgA3F1Vh.js";import"./iteratee-BvFp8pOf.js";import"./useAnimationId-CwgRschT.js";import"./Cross-BhJTE66h.js";import"./Rectangle-DR9uOGHN.js";import"./util-Dxo8gN5i.js";import"./Sector-C58FB1jO.js";import"./AnimatedItems-DqWEvMcn.js";import"./ActivePoints-BzEepdn2.js";import"./Dot-C6F_-u4G.js";import"./RegisterGraphicalItemId-BCvN7nSY.js";import"./ErrorBarContext-BzIynu6X.js";import"./GraphicalItemClipPath-DpsQ0BRT.js";import"./SetGraphicalItem-Co1iXM8q.js";import"./getRadiusAndStrokeWidthFromDot-C-yk404_.js";import"./ActiveShapeUtils-DaFsN-Ec.js";import"./useGraphicalItemIdentity-Bs2hvtnA.js";import"./step-BVPKFfuD.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
