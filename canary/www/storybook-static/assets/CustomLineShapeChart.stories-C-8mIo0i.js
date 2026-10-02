import{R as t}from"./iframe-CEcITxQg.js";import{a as p}from"./isWellBehavedNumber-DjN2b99T.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BdeeeUwj.js";import{R as T}from"./zIndexSlice-DG2GpHlE.js";import{C as M}from"./CartesianGrid-C3nsYKHb.js";import{X as $}from"./XAxis-DpYz8_Dh.js";import{Y as I}from"./YAxis-WtIBmSn8.js";import{L as O}from"./Legend-pC0N9pnS.js";import{T as W}from"./Tooltip-BDNX7Znf.js";import{L as C}from"./Line-BBaVBl_d.js";import{C as X}from"./Curve-k0k5dTsU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CkmfyhqW.js";import"./RechartsWrapper-BTJ2LZ14.js";import"./axisSelectors-BTQvXZat.js";import"./throttle-B3Xibe3Y.js";import"./index-D2_zyIdl.js";import"./index-Bhk23PFU.js";import"./d3-scale-CwC0nBHM.js";import"./index-D0x1dbK7.js";import"./index-DeVAKBla.js";import"./renderedTicksSlice-Dgfw4xeW.js";import"./index-DeuCtru2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bf9v-Tj6.js";import"./chartDataContext-BzZyvQEB.js";import"./CategoricalChart-B6S6Zh35.js";import"./CartesianAxis-CRhVdfos.js";import"./Layer-DxHA8fzs.js";import"./Text-BaR1ZvCW.js";import"./DOMUtils-CRevI1wr.js";import"./useId-BfWHYsCr.js";import"./useBackwardsCompatibleTheme-B-LDULxa.js";import"./Label-CAyVtv0N.js";import"./ZIndexLayer-Crp9kN4i.js";import"./types-CL5KqLm4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-wZDO_6SA.js";import"./symbol-CZuDR-tR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BT0tqnsY.js";import"./uniqBy-DqiiQuQc.js";import"./iteratee-D_w4T-w5.js";import"./useAnimationId-Cz0tj6YQ.js";import"./Cross-CQxShz6V.js";import"./Rectangle-rvPl5WSU.js";import"./util-Dxo8gN5i.js";import"./Sector-BZR-i2Ix.js";import"./AnimatedItems-Ys-2ZU7Q.js";import"./ActivePoints-WAxl0Bv-.js";import"./Dot-BILX6Wzk.js";import"./RegisterGraphicalItemId-CodKeWvn.js";import"./ErrorBarContext-B5kiS63M.js";import"./GraphicalItemClipPath-BwGvKzSp.js";import"./SetGraphicalItem-ZqPAg0_A.js";import"./getRadiusAndStrokeWidthFromDot-DIOfJC8V.js";import"./ActiveShapeUtils-Dx9yEBbu.js";import"./useGraphicalItemIdentity-DDNep2_9.js";import"./step-BOs9b6Ri.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
