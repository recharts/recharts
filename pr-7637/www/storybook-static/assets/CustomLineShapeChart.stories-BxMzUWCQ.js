import{R as t}from"./iframe-NVmT8fNw.js";import{a as s}from"./isWellBehavedNumber-DXLqj9yd.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Belzvbse.js";import{R as T}from"./zIndexSlice-oXJaNZSv.js";import{C as M}from"./CartesianGrid-DKoVBLjh.js";import{X as $}from"./XAxis-hjQAsG8m.js";import{Y as I}from"./YAxis-C2Jyljrh.js";import{L as O}from"./Legend-BN-zTwcb.js";import{T as W}from"./Tooltip-uYg3Huk3.js";import{L as C}from"./Line-B-bNZ47p.js";import{C as X}from"./Curve-BPHyzTn-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8jEDqKQ.js";import"./RechartsWrapper-D7AIj6ea.js";import"./index-BpZAOzLQ.js";import"./index-DglhN2t4.js";import"./index-Q4SQnPgQ.js";import"./index-UDay9_dl.js";import"./throttle-Cfz3FXws.js";import"./axisSelectors-tCKXm7jn.js";import"./d3-scale-Brn0HGK7.js";import"./renderedTicksSlice-DjTIRCRN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKFmyfhg.js";import"./chartDataContext-DZujCsS5.js";import"./CategoricalChart-Dxp6zY9P.js";import"./CartesianAxis-CwxpTfpR.js";import"./Layer-BD2Ls3O_.js";import"./Text-C5xVRdeB.js";import"./DOMUtils-CDTGDYSn.js";import"./RechartsThemeContext-awS4vi70.js";import"./Label-DfDRyr69.js";import"./ZIndexLayer-B6fWtNzq.js";import"./types-DCTQ4Lzc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-LFKXMbqN.js";import"./symbol-Bwf-l63G.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1W2-wdN.js";import"./uniqBy-BhGOvFTa.js";import"./iteratee-DCpTGsx6.js";import"./useAnimationId-d1ULQyIN.js";import"./Cross-CZY283UJ.js";import"./Rectangle-DMIOlDxR.js";import"./util-Dxo8gN5i.js";import"./Sector-D2cWFEle.js";import"./AnimatedItems-CytrP_0t.js";import"./ActivePoints-CgHBThkz.js";import"./Dot-CFsdSuNY.js";import"./RegisterGraphicalItemId-twhih18P.js";import"./ErrorBarContext-CABhUjIg.js";import"./GraphicalItemClipPath-BQB0fOYx.js";import"./SetGraphicalItem-B2EMuvtY.js";import"./getRadiusAndStrokeWidthFromDot-D6gL5APH.js";import"./ActiveShapeUtils-0-0F3LMG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-CnSikc6K.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
