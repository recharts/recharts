import{R as t}from"./iframe-CZhceScU.js";import{a as s}from"./isWellBehavedNumber-D-87yJTE.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D9jiPPn3.js";import{R as T}from"./zIndexSlice-6KQyntdT.js";import{C as M}from"./CartesianGrid-DYux2XBt.js";import{X as $}from"./XAxis-o7n6bJ8R.js";import{Y as I}from"./YAxis-DyokKs4q.js";import{L as O}from"./Legend-DUi_ZNry.js";import{T as W}from"./Tooltip-BAtEf983.js";import{L as C}from"./Line-BVbkMHTj.js";import{C as X}from"./Curve-FuimFyqA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DKz_FWjC.js";import"./RechartsWrapper-FSanOK4G.js";import"./index-BEy16_lK.js";import"./index-Blwm4_kv.js";import"./index-CDuDfojR.js";import"./index-DpQK2wXv.js";import"./throttle-4vdN6P2D.js";import"./axisSelectors-8JBi47Qo.js";import"./d3-scale-C7Vm1zun.js";import"./renderedTicksSlice-Cf3Ebwgh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8qShj_eX.js";import"./chartDataContext-DJFrW4dv.js";import"./CategoricalChart-Cgj8wKUd.js";import"./CartesianAxis-C3rrpirv.js";import"./Layer-Drn4JAex.js";import"./Text-CmIo03No.js";import"./DOMUtils-DbT53TZn.js";import"./useId-BZ6DWjsO.js";import"./useBackwardsCompatibleTheme-DNlLIhqX.js";import"./Label-CNgEIlwK.js";import"./ZIndexLayer-wFB7jUG1.js";import"./types-B4F0kvck.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-XuuhZcr7.js";import"./symbol-BufjkdaW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CAePsNzR.js";import"./uniqBy-DimUAY1k.js";import"./iteratee-D_nrFtIa.js";import"./useAnimationId-Cx8RIuDl.js";import"./Cross-DSmOwhxO.js";import"./Rectangle-CNqYqtsk.js";import"./util-Dxo8gN5i.js";import"./Sector-BBPVFVEm.js";import"./AnimatedItems-DXBAxv9p.js";import"./ActivePoints-B1Bif-Ou.js";import"./Dot-0p8__XhD.js";import"./RegisterGraphicalItemId-DnHmtku0.js";import"./ErrorBarContext-CS2ZLStC.js";import"./GraphicalItemClipPath-BzJCuoya.js";import"./SetGraphicalItem-DuTz6hix.js";import"./getRadiusAndStrokeWidthFromDot-CVlp7Tat.js";import"./ActiveShapeUtils-Dk1tODGi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-H2rxpHgP.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
