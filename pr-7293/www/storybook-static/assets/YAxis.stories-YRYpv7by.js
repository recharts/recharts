import{e as t}from"./iframe-CGwnqAI9.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DQ_Ub3Le.js";import{R as h}from"./arrayEqualityCheck-DRh0NsZa.js";import{L as A}from"./LineChart-DJrMWupI.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BrzCw4F9.js";import{X as x}from"./XAxis-B1wOh-_6.js";import{L as E}from"./Legend-DN_hPw8G.js";import{L as n}from"./Line-hsHA11JF.js";import{T as v}from"./Tooltip-BrfQv9eX.js";import{R as k}from"./RechartsHookInspector-Dp5vB4hQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-4LCb4x4u.js";import"./Layer-CQ6uqOgk.js";import"./resolveDefaultProps-DSTq7oxQ.js";import"./Text-DNmyQGES.js";import"./DOMUtils-nZK1ZF4e.js";import"./Label-CJpeNkBK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CMaPWngm.js";import"./zIndexSlice-BTBhIRz7.js";import"./immer-DfOKcAuw.js";import"./types-VBg1tlke.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C0ADS2ij.js";import"./hooks-CyDmPBvG.js";import"./axisSelectors-BGY1T7LG.js";import"./d3-scale-DlZgn0s2.js";import"./RechartsWrapper-DByz9jGi.js";import"./index-mavG575g.js";import"./CartesianChart-Bbfh0WUo.js";import"./chartDataContext-oPYA1VCq.js";import"./CategoricalChart-COt4unt0.js";import"./Symbols-CWdafSUI.js";import"./symbol-D9RrWTM2.js";import"./step-BVKFw9bQ.js";import"./useElementOffset-CXOBSiaG.js";import"./uniqBy-DiZ8Z3bH.js";import"./iteratee-DjpPVy9L.js";import"./ReactUtils-CbJaRrjx.js";import"./ActivePoints-Cr6dU73k.js";import"./Dot-0lNFu7iq.js";import"./RegisterGraphicalItemId-nbnlv4b-.js";import"./ErrorBarContext-CxWaFe4Q.js";import"./GraphicalItemClipPath-kWf0wfBs.js";import"./SetGraphicalItem-p36bNdDU.js";import"./useAnimationId-DHwy2PIZ.js";import"./getRadiusAndStrokeWidthFromDot-8id4PXjH.js";import"./ActiveShapeUtils-CKeH7i0X.js";import"./isPlainObject-BF1Vp7m2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsqGVbsk.js";import"./Trapezoid-BXyomBoy.js";import"./Sector-NwDh2164.js";import"./Curve-kVtEDQbb.js";import"./Cross-Cf1ElWMr.js";import"./index-JaLX6-zQ.js";import"./ChartSizeDimensions-DcTb07cJ.js";import"./OffsetShower-DNDx_7Gv.js";import"./PlotAreaShower-C1OT31tE.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
