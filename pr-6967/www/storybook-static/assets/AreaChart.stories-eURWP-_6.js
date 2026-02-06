import{e as t}from"./iframe-C-p_RB-q.js";import{g as p}from"./utils-ePvtT4un.js";import{A as n}from"./AreaChartArgs-C5AIwa1g.js";import{A as l}from"./AreaChart-BfjsfhYc.js";import{p as E,s as S}from"./Page-Cj8EiXz7.js";import{R as m}from"./arrayEqualityCheck-B-MvrmN7.js";import{A as h}from"./Area-DrIA-ZhD.js";import{C as R}from"./CartesianGrid-BwIpVtPi.js";import{T as v}from"./Tooltip-C6vFtsN0.js";import{R as g}from"./RechartsHookInspector-A7vZopTv.js";import{X as w}from"./XAxis-C08WqI39.js";function _(e,r,i){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-r),e._y2+e._k*(e._y1-i),e._x2,e._y2)}function T(e,r){this._context=e,this._k=(1-r)/6}T.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:_(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,r){switch(e=+e,r=+r,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 1:this._point=2,this._x1=e,this._y1=r;break;case 2:this._point=3;default:_(this,e,r);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=r}};const O=function e(r){function i(c){return new T(c,r)}return i.tension=function(c){return e(+c)},i}(0),j={argTypes:n,component:l},a={name:"Simple",render:e=>t.createElement(m,{width:"100%",height:400},t.createElement(l,{...e,margin:{top:0,bottom:0,left:50,right:50}},t.createElement(h,{dataKey:"pv",strokeWidth:3,stroke:"#2451B7",fill:"#5376C4"}),t.createElement(R,{opacity:.1,vertical:!1}),t.createElement(v,null),t.createElement(g,null))),args:{...p(n),data:E,margin:{top:0,bottom:0,left:50,right:50}}},K=O.tension(.5),o={render:e=>t.createElement(m,{width:"100%",height:400},t.createElement(l,{...e},t.createElement(h,{type:K,dataKey:"pv",stroke:"#ff7300",fill:"#ff7300",fillOpacity:.9}),t.createElement(g,null))),args:{...p(n),data:E,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}},s={render:e=>t.createElement(m,{width:"100%",height:400},t.createElement(l,{...e},t.createElement(h,{dataKey:"A",stroke:"green",fill:"green",fillOpacity:.5}),t.createElement(w,{dataKey:"subject",type:"category",allowDuplicatedCategory:!1}),t.createElement(v,null),t.createElement(g,null))),args:{...p(n),data:S,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}};var f,u,d;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args} margin={{
        top: 0,
        bottom: 0,
        left: 50,
        right: 50
      }}>
          <Area dataKey="pv" strokeWidth={3} stroke="#2451B7" fill="#5376C4" />
          <CartesianGrid opacity={0.1} vertical={false} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,A,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var b,k,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area dataKey="A" stroke="green" fill="green" fillOpacity={0.5} />
          <XAxis dataKey="subject" type="category" allowDuplicatedCategory={false} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: subjectData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const D=["API","CustomType","CategoricalAreaChart"],q=Object.freeze(Object.defineProperty({__proto__:null,API:a,CategoricalAreaChart:s,CustomType:o,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{a as A,q as C};
