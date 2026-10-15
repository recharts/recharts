import{R as t}from"./iframe-DpdlAHMd.js";import{a as p}from"./isWellBehavedNumber-ccQ0ki_-.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bj6y6SUW.js";import{R as T}from"./zIndexSlice-D40A4F5S.js";import{C as M}from"./CartesianGrid-_-u-nYWC.js";import{X as $}from"./XAxis-BEUW7cLW.js";import{Y as I}from"./YAxis-DLQpEtie.js";import{L as O}from"./Legend-CoqeD9v2.js";import{T as W}from"./Tooltip-BGbC_lRy.js";import{L as C}from"./Line-CdUHiaZ_.js";import{C as X}from"./Curve-jCmK9z3l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK3XJvDH.js";import"./RechartsWrapper-Dd9femQq.js";import"./axisSelectors-DQOroxWm.js";import"./throttle-Bui1B-A-.js";import"./index-CKGLfYUI.js";import"./index-D9RL9gGT.js";import"./d3-scale-DPtZvEea.js";import"./index-Dgc5VXFD.js";import"./index-CPgT1QoG.js";import"./renderedTicksSlice-BduPU7I5.js";import"./index-938zI0LN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dhk6ePqg.js";import"./chartDataContext-t_vCqpmk.js";import"./CategoricalChart-Bt7APlp3.js";import"./CartesianAxis-Di7rigDv.js";import"./Layer-B8bai4JO.js";import"./Text-CoXwYvwY.js";import"./pageBackground-D9ogOXyk.js";import"./useId-CnP1W382.js";import"./useBackwardsCompatibleTheme-CGJLu250.js";import"./Label-E3aXJx_S.js";import"./ZIndexLayer-lKfC9naY.js";import"./types-BGps8a2x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BqSBrmZ6.js";import"./symbol-BMskukWu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJ8RLuax.js";import"./uniqBy-D_yJRXK6.js";import"./iteratee-CYPCsLC3.js";import"./useAnimationId-BE4SknEb.js";import"./Cross-CHAbA02L.js";import"./Rectangle-CK9sa7-j.js";import"./util-Dxo8gN5i.js";import"./Sector-3oNumv3W.js";import"./activeStyles-D6HKGU7f.js";import"./dataEntryStyles-YsQ_uBBL.js";import"./ActivePoints-CLGOJg0k.js";import"./Dot-B-SHSrYh.js";import"./ErrorBarContext-CNLce-HY.js";import"./GraphicalItemClipPath-Cs7E0DKS.js";import"./SetGraphicalItem-KfOC3T9M.js";import"./getRadiusAndStrokeWidthFromDot-DY_fHX61.js";import"./ActiveShapeUtils-fnlRVR3C.js";import"./useEffectiveDataKey-jGEWZ8Yk.js";import"./step-D1wWY9HN.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
