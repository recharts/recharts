import{R as t}from"./iframe-BWKtkC3a.js";import{a as p}from"./isWellBehavedNumber-Bx1-jT0B.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CFHc6ggn.js";import{R as T}from"./zIndexSlice-CJYktc5S.js";import{C as M}from"./CartesianGrid-CvLGgohb.js";import{X as $}from"./XAxis-Beuqpq4u.js";import{Y as I}from"./YAxis-Bjai06eq.js";import{L as O}from"./Legend-DO3vjskf.js";import{T as W}from"./Tooltip-C5Fcyz1u.js";import{L as C}from"./Line-_xIPfQEK.js";import{C as X}from"./Curve-DCrUUXgR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSdxfhaa.js";import"./RechartsWrapper-BXQ1II60.js";import"./axisSelectors-4rRhJnZy.js";import"./throttle-CSPVuwv0.js";import"./index-dmgaO9Ns.js";import"./index-DnD7Y3-0.js";import"./d3-scale-BK7khyLD.js";import"./index-2yxEF-zg.js";import"./index-BJ1rhnQo.js";import"./renderedTicksSlice-CkjOXsqY.js";import"./index-BdvYswuq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ck046iEl.js";import"./chartDataContext-CHsw8eio.js";import"./CategoricalChart-CTjKdKoB.js";import"./CartesianAxis-CjxgM0pW.js";import"./Layer-BW2neL7L.js";import"./Text-D6blVt8R.js";import"./DOMUtils-BR5iDZmA.js";import"./useId-Dtk37enT.js";import"./useBackwardsCompatibleTheme-ChHa43Fb.js";import"./Label-3HnLAq9q.js";import"./ZIndexLayer-CAOggInk.js";import"./types-DVYgZ5G0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CFGGSQbZ.js";import"./symbol-C9rnqtm1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dl9OEUY7.js";import"./uniqBy-jfG8v9oK.js";import"./iteratee-CcJpQkl8.js";import"./useAnimationId-DDNvTaoZ.js";import"./Cross-CWtmgP3K.js";import"./Rectangle-Mj13KGuq.js";import"./util-Dxo8gN5i.js";import"./Sector-DnckVTOs.js";import"./AnimatedItems-DrPbLth3.js";import"./ActivePoints-UtB0KfzC.js";import"./Dot-j4FVDpMz.js";import"./RegisterGraphicalItemId-DgdLcRFp.js";import"./ErrorBarContext-CPaf1b78.js";import"./GraphicalItemClipPath-DnbnKIJy.js";import"./SetGraphicalItem-CkEmM5fN.js";import"./getRadiusAndStrokeWidthFromDot-CP4Q4sYB.js";import"./ActiveShapeUtils-BQlodlaC.js";import"./useGraphicalItemIdentity-hpl57a82.js";import"./step-4b6-oj2z.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
