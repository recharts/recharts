import{R as t}from"./iframe-ZxfiIiWi.js";import{a as p}from"./isWellBehavedNumber-DX24GKSm.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-_O5Kxyr-.js";import{R as T}from"./zIndexSlice-By0bZmpT.js";import{C as M}from"./CartesianGrid-CSncOHrx.js";import{X as $}from"./XAxis-8M4LuTq0.js";import{Y as I}from"./YAxis-Ce1Cc64q.js";import{L as O}from"./Legend-7mLxfvaa.js";import{T as W}from"./Tooltip-DRa829Qg.js";import{L as C}from"./Line-DdCEipwX.js";import{C as X}from"./Curve-DPtlKYb4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1Uan2Hnp.js";import"./RechartsWrapper-UKbeDROs.js";import"./axisSelectors-DMQ84IJA.js";import"./throttle-CfDYUS1N.js";import"./index-DZp6XoEo.js";import"./index-DLRIqKjc.js";import"./d3-scale-Np9PFIYo.js";import"./index-DRuu78hr.js";import"./index-6NV0E9go.js";import"./renderedTicksSlice-nc0b0sSE.js";import"./index-BgcSxEKm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-v34KMzUV.js";import"./chartDataContext-D2b6BjfF.js";import"./CategoricalChart-Ls_A9xeg.js";import"./CartesianAxis-DHTAgCml.js";import"./Layer-SD6n1FzC.js";import"./Text-BxPrjmzo.js";import"./DOMUtils-CTcVRqQO.js";import"./useId-DbFmynHI.js";import"./useBackwardsCompatibleTheme-iH09SwpV.js";import"./Label-C08NNQeO.js";import"./ZIndexLayer-MDZol7np.js";import"./types-DfGxKHCw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-c_F5rIiR.js";import"./symbol-De182CBu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CtPYwSuY.js";import"./uniqBy-BC78fxA5.js";import"./iteratee-CPoLBgS5.js";import"./useAnimationId-Bd76uFLI.js";import"./Cross-CZB0PSDR.js";import"./Rectangle-XQRP3xav.js";import"./util-Dxo8gN5i.js";import"./Sector-DztahhQ8.js";import"./AnimatedItems-C7ik5li4.js";import"./ActivePoints--DLJoCCT.js";import"./Dot-DBOOUc-e.js";import"./RegisterGraphicalItemId-BglnUmW_.js";import"./ErrorBarContext-lXhQP1y7.js";import"./GraphicalItemClipPath-D7uJY0ae.js";import"./SetGraphicalItem-DfXzBFI9.js";import"./getRadiusAndStrokeWidthFromDot-CERp_c72.js";import"./ActiveShapeUtils-O5hE5x5h.js";import"./useGraphicalItemIdentity-Cy74xmM1.js";import"./step-BSgEqbWI.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
