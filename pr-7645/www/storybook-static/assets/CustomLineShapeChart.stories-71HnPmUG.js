import{R as t}from"./iframe-Ci96e1sZ.js";import{a as s}from"./isWellBehavedNumber-CF2GCTfq.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CFSpypWG.js";import{R as T}from"./zIndexSlice-B1EQFXas.js";import{C as M}from"./CartesianGrid-CUhXlyIq.js";import{X as $}from"./XAxis-sNeLDR5W.js";import{Y as I}from"./YAxis-BeupBiv_.js";import{L as O}from"./Legend-BCp85ZfU.js";import{T as W}from"./Tooltip-CZO2G-iO.js";import{L as C}from"./Line-CNdoo1PD.js";import{C as X}from"./Curve-BysAQY9m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BzIfhmsg.js";import"./RechartsWrapper-DZtweL3y.js";import"./index-7lcQp6iI.js";import"./index-DH9mueDN.js";import"./index-CPCYaABA.js";import"./index-BOr38y8s.js";import"./throttle-Dnh15uFS.js";import"./axisSelectors-Bjs83WTa.js";import"./d3-scale-B0NLrUrx.js";import"./renderedTicksSlice-DNsJLMW0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCAPJMRK.js";import"./chartDataContext-BYKHEhUl.js";import"./CategoricalChart--GJhAkst.js";import"./CartesianAxis-D8l6BhAe.js";import"./Layer-CZ2F14sW.js";import"./Text-B3nSPEiT.js";import"./DOMUtils-BbVSTVZx.js";import"./useBackwardsCompatibleTheme-D2Fw4B1K.js";import"./Label-CF4xlS6j.js";import"./ZIndexLayer-DwZny_eu.js";import"./types-D2o80dZ0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Di4l6aUk.js";import"./symbol-DrFKkU6g.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BdkJ1pFB.js";import"./uniqBy-CHZeAJXB.js";import"./iteratee-C-mJOptL.js";import"./useAnimationId-BzCTa_4t.js";import"./Cross-3xywc_iZ.js";import"./Rectangle-ELfFl8ZJ.js";import"./util-Dxo8gN5i.js";import"./Sector-Cw_y7PiZ.js";import"./AnimatedItems-BGUr9OQF.js";import"./ActivePoints-CcMPEi3Q.js";import"./Dot-CNczHnMS.js";import"./RegisterGraphicalItemId-CEOZLZl3.js";import"./ErrorBarContext-MBgpuxtH.js";import"./GraphicalItemClipPath-wdGuOIwS.js";import"./SetGraphicalItem-C5ta0dz_.js";import"./getRadiusAndStrokeWidthFromDot-BH_CgfJ4.js";import"./ActiveShapeUtils-Bmp4Kv1_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-pm8cM45a.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ht=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
