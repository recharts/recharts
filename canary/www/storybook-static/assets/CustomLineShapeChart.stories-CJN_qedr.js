import{R as t}from"./iframe-D9OaE0-D.js";import{a as p}from"./isWellBehavedNumber-BGqhKh1u.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-QrKy48hN.js";import{R as T}from"./zIndexSlice-C6kYgFGy.js";import{C as M}from"./CartesianGrid-k2q49IQD.js";import{X as $}from"./XAxis-jEEi2ah-.js";import{Y as I}from"./YAxis-B27MwDT8.js";import{L as O}from"./Legend-DkqrCmau.js";import{T as W}from"./Tooltip-D5KEPQtn.js";import{L as C}from"./Line-6OD2KhpA.js";import{C as X}from"./Curve-BeWRx8o8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BdEIFooo.js";import"./RechartsWrapper-2JOV4OxH.js";import"./axisSelectors-D_Wp4SpS.js";import"./throttle-C2SndTCZ.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./d3-scale-C7A9n28f.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-Dd8asFuH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./CartesianAxis-piiyQKSw.js";import"./Layer-D4toxw-K.js";import"./Text-BzPsoW0G.js";import"./pageBackground-Cv-86bVo.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./Label-DM3WzLWy.js";import"./ZIndexLayer-D_H7NPBA.js";import"./types-CXdLVzsF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CbfWA2CL.js";import"./symbol-Cw1fMt1F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZfP2Owcx.js";import"./uniqBy-yYv24bjR.js";import"./iteratee-4GlLraWT.js";import"./useAnimationId-D-wfB7qE.js";import"./Cross-BGSaT5oq.js";import"./Rectangle-BseNEmt0.js";import"./util-Dxo8gN5i.js";import"./Sector-OwaEg4iu.js";import"./activeStyles-8VQiBHQs.js";import"./dataEntryStyles-Bho6MXC7.js";import"./ActivePoints-BxgbZhZA.js";import"./Dot-B6z8g14w.js";import"./ErrorBarContext-CIfQ1Dv4.js";import"./GraphicalItemClipPath-DMgrRmW6.js";import"./SetGraphicalItem-jAe7eVS9.js";import"./getRadiusAndStrokeWidthFromDot-CakziVew.js";import"./ActiveShapeUtils-Dsfqnr6i.js";import"./useEffectiveDataKey-B44sET-2.js";import"./step-BNV5-s-4.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
