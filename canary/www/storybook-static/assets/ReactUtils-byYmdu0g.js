import{r as a,j as p,k as f}from"./iframe-DTmqf-89.js";import{L as P,i as k}from"./Label-egeGTsC3.js";import{L as T}from"./Layer-BTS4uGxy.js";import{D as V,q as E}from"./arrayEqualityCheck-B5lu4Lk9.js";import{s as q}from"./resolveDefaultProps-C00TVibV.js";import{Z as z}from"./ZIndexLayer-DxJNdv8G.js";import{i as B}from"./Text-CUOaxD2f.js";import{q as N}from"./RechartsWrapper-COXu3P-w.js";const D=e=>{const t=Array.isArray(e.value)?e.value[e.value.length-1]:e.value;if(B(t))return t},L=a.createContext(void 0),m=L.Provider,x=a.createContext(void 0),H=x.Provider;function F(){return a.useContext(L)}function K(){return a.useContext(x)}function l({valueAccessor:e=D,...t}){const{dataKey:n,clockWise:o,id:r,textBreakAll:s,zIndex:g,...C}=t,_=F(),I=K(),c=_||I;return!c||!c.length?null:a.createElement(z,{zIndex:g??V.label},a.createElement(T,{className:"recharts-label-list"},c.map((i,u)=>{const w=p(n)?e(i,u):E(i.payload,n),A=p(r)?{}:{id:`${r}-${u}`};return a.createElement(P,{key:`label-${u}`,...q(i),...C,...A,fill:t.fill??i.fill,parentViewBox:i.parentViewBox,value:w,textBreakAll:s,viewBox:i.viewBox,index:u,zIndex:0})})))}l.displayName="LabelList";function h({label:e}){return e?e===!0?a.createElement(l,{key:"labelList-implicit"}):a.isValidElement(e)||k(e)?a.createElement(l,{key:"labelList-implicit",content:e}):typeof e=="object"?a.createElement(l,{key:"labelList-implicit",...e,type:String(e.type)}):null:null}try{l.displayName="LabelList",l.__docgenInfo={description:"",displayName:"LabelList",props:{valueAccessor:{defaultValue:{value:`(entry: LabelListEntry): RenderableText => {
  const val = Array.isArray(entry.value) ? entry.value[entry.value.length - 1] : entry.value;
  if (isRenderableText(val)) {
    return val;
  }
  return undefined;
}`},description:`The accessor function to get the value of each label. Is ignored if dataKey is specified.
@param entry
@param index`,name:"valueAccessor",required:!1,type:{name:"((entry: CartesianLabelListEntry | PolarLabelListEntry, index: number) => RenderableText)"}},clockWise:{defaultValue:null,description:"The parameter to calculate the view box of label in radial charts.",name:"clockWise",required:!1,type:{name:"boolean"}},dataKey:{defaultValue:null,description:`Decides how to extract the value of each label from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of each label.

If set, then valueAccessor will be ignored.

Scatter requires this prop to be set.
Other graphical components will show the same value as the dataKey of the component by default.`,name:"dataKey",required:!1,type:{name:"DataKey<any>"}},content:{defaultValue:null,description:`If set a React element, the option is the customized React element of rendering each label.
If set to a function, the function is called once for each item
@example <LabelList content={CustomizedLabel} />
@see {@link https://recharts.github.io/en-US/examples/BarChartWithMinHeight/ Customized content of LabelList in a BarChart}`,name:"content",required:!1,type:{name:"LabelContentType"}},textBreakAll:{defaultValue:null,description:"",name:"textBreakAll",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"The position of label relative to the view box.",name:"position",required:!1,type:{name:"LabelPosition"}},angle:{defaultValue:null,description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.
@defaultValue 0`,name:"angle",required:!1,type:{name:"number"}},formatter:{defaultValue:null,description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,name:"formatter",required:!1,type:{name:"LabelFormatter"}},zIndex:{defaultValue:null,description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.
@since 3.4
@defaultValue 2000
@see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}`,name:"zIndex",required:!1,type:{name:"number"}}}}}catch{}try{h.displayName="LabelListFromLabelProp",h.__docgenInfo={description:"",displayName:"LabelListFromLabelProp",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ImplicitLabelListType"}}}}}catch{}try{m.displayName="CartesianLabelListContextProvider",m.__docgenInfo={description:"",displayName:"CartesianLabelListContextProvider",props:{}}}catch{}const y=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"";let b=null,d=null;const v=e=>{if(e===b&&Array.isArray(d))return d;let t=[];return a.Children.forEach(e,n=>{p(n)||(N.isFragment(n)?t=t.concat(v(n.props.children)):t.push(n))}),d=t,b=e,t};function M(e,t){const n=[];let o=[];return Array.isArray(t)?o=t.map(r=>y(r)):o=[y(t)],v(e).forEach(r=>{const s=f(r,"type.displayName")||f(r,"type.name");s&&o.indexOf(s)!==-1&&n.push(r)}),n}const G=e=>e&&typeof e=="object"&&"clipDot"in e?!!e.clipDot:!0;export{m as C,l as L,H as P,h as a,M as f,G as i};
