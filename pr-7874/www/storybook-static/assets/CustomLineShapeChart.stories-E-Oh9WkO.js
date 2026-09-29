import{R as t}from"./iframe-B8WiTaBv.js";import{a as p}from"./isWellBehavedNumber-BNs6A6nd.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DAOSiZmu.js";import{R as T}from"./zIndexSlice-D5_q7rMj.js";import{C as M}from"./CartesianGrid-BaJfNTjD.js";import{X as $}from"./XAxis-CJ0oEHon.js";import{Y as I}from"./YAxis-BeTfGw8Q.js";import{L as O}from"./Legend-BQvP-u9A.js";import{T as W}from"./Tooltip-DrOPjfNB.js";import{L as C}from"./Line-Dg3Mfg7R.js";import{C as X}from"./Curve-CzATnpcO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DE7ai4U1.js";import"./RechartsWrapper-D4X8qM3L.js";import"./axisSelectors-fwkbTSQU.js";import"./throttle-Bf7HFTSb.js";import"./index-CkpdDqnf.js";import"./index-CK2GwVFT.js";import"./d3-scale-DPpdjCkc.js";import"./index-BEIQXCWA.js";import"./index-C4vHDdGM.js";import"./renderedTicksSlice-XS0yYXwf.js";import"./index-DFXXQ9h7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ct7y2r_J.js";import"./chartDataContext-BzLrqzRe.js";import"./CategoricalChart-DNXrcn0T.js";import"./CartesianAxis-B062qB3S.js";import"./Layer-DykiohLY.js";import"./Text-DTdnI9Wt.js";import"./DOMUtils-CVPbEKMw.js";import"./useId-BQjGOdOZ.js";import"./useBackwardsCompatibleTheme--hv8ghFv.js";import"./Label-BgOirL-a.js";import"./ZIndexLayer-Dp2lwUDn.js";import"./types-CBGkJi7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dw-ATZdW.js";import"./symbol-Cfz1UmnV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-JTP_ODLW.js";import"./uniqBy-CnCANcHU.js";import"./iteratee-CdLDDlyj.js";import"./useAnimationId-BEfI3V-Q.js";import"./Cross-taMPCnYE.js";import"./Rectangle-BbDRcByH.js";import"./util-Dxo8gN5i.js";import"./Sector-ZgiG7-Ti.js";import"./AnimatedItems-DoJommjq.js";import"./ActivePoints-wJ9lpzyc.js";import"./Dot-YjfpD-D0.js";import"./RegisterGraphicalItemId-D1erTERG.js";import"./ErrorBarContext-Bffy1Kmi.js";import"./GraphicalItemClipPath-C1v82me1.js";import"./SetGraphicalItem-CT3FOcLU.js";import"./getRadiusAndStrokeWidthFromDot-CRnyj104.js";import"./ActiveShapeUtils-ccGnTT5q.js";import"./useGraphicalItemIdentity-CGETAvly.js";import"./step-pDrJKgS7.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
