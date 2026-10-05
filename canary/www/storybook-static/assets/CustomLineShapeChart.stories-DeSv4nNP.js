import{R as t}from"./iframe-Xtjdy8K6.js";import{a as p}from"./isWellBehavedNumber-CZ785SIV.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BSAgiykc.js";import{R as T}from"./zIndexSlice-Ca3_di9O.js";import{C as M}from"./CartesianGrid-CpXgFykN.js";import{X as $}from"./XAxis-Dsuy05EW.js";import{Y as I}from"./YAxis-C0P2yrRK.js";import{L as O}from"./Legend-BWy8kwYj.js";import{T as W}from"./Tooltip-BaBPOWSY.js";import{L as C}from"./Line-ClPESsPf.js";import{C as X}from"./Curve-_q4HdrfF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Boep7u7P.js";import"./RechartsWrapper-DLU1mxV-.js";import"./axisSelectors-CubJTdeO.js";import"./throttle-BJfO_UKv.js";import"./index-CD-q9qaf.js";import"./index-I4ONaVXX.js";import"./d3-scale-DZ-m0TzD.js";import"./index-BwTAVpnp.js";import"./index-DLvKfnax.js";import"./renderedTicksSlice-BtArWvvy.js";import"./index-Cf61T-z_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-uyYSGYFX.js";import"./chartDataContext-h8VmgL2W.js";import"./CategoricalChart-BG0XVVA5.js";import"./CartesianAxis-CmHtOK-l.js";import"./Layer-FeyHjh4s.js";import"./Text-LNKD3nQn.js";import"./DOMUtils-BmMu5huz.js";import"./useId-DBEZo7IS.js";import"./useBackwardsCompatibleTheme-JVp1trOZ.js";import"./Label-BQUl4kmN.js";import"./ZIndexLayer-B714zacF.js";import"./types-DxDlUmLu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BCh1_Gtu.js";import"./symbol-CsXV0QLt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRzU6VaK.js";import"./uniqBy-C0abLPcx.js";import"./iteratee-CxPVqHqK.js";import"./useAnimationId-CuSCtoXZ.js";import"./Cross-BOVKbuFH.js";import"./Rectangle-BLk0GJfh.js";import"./util-Dxo8gN5i.js";import"./Sector-BUmVWEQm.js";import"./AnimatedItems-CiMNNQac.js";import"./ActivePoints-B88QV3Sj.js";import"./Dot-D52dYvYg.js";import"./RegisterGraphicalItemId-5IcKOSXK.js";import"./ErrorBarContext-DcFzK2E8.js";import"./GraphicalItemClipPath-CULhMThP.js";import"./SetGraphicalItem-BUfBrIkK.js";import"./getRadiusAndStrokeWidthFromDot-DLeCgjsD.js";import"./ActiveShapeUtils-kAxIXwKe.js";import"./useGraphicalItemIdentity-BFTytd0c.js";import"./step-C43hkdfh.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
