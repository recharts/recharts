import{R as t}from"./iframe-BV4BJT-m.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DrgVb9Ay.js";import{R as h}from"./zIndexSlice-B-lthx1D.js";import{L as A}from"./LineChart-C5SXKHxX.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-6YUfnSB7.js";import{X as f}from"./XAxis-Dddiy3kS.js";import{L as E}from"./Legend-D02jVJyb.js";import{L as i}from"./Line-CIJrCJ5v.js";import{T as v}from"./Tooltip-BZU_FemD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-xll97smN.js";import"./Text-CO85_-F3.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./throttle-2G-03cGC.js";import"./axisSelectors-DnTNEhev.js";import"./d3-scale-9I0ClQu9.js";import"./CartesianAxis-D1XYtW-z.js";import"./Layer-C4zlYTAs.js";import"./types-CgGLncla.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-Cwzrr77V.js";import"./index-CwDo1ygF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BCKkTVf1.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./Symbols-D8__1CQa.js";import"./symbol-CNlre4TP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOPUcnVK.js";import"./uniqBy-D2Xk11H0.js";import"./iteratee-BIIV1qIF.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BxOKje4W.js";import"./step-CflYfM9D.js";import"./LabelList-B3uF9y0j.js";import"./ActivePoints-CpdWeHKB.js";import"./Dot-ChrRm5q7.js";import"./activeStyles-DPABJUlt.js";import"./useAnimationId-BaOUwCNw.js";import"./dataEntryStyles-Bs_-V5Jc.js";import"./ErrorBarContext-CgppqQDQ.js";import"./SetGraphicalItem-BojvnrYu.js";import"./getRadiusAndStrokeWidthFromDot-nytBruEY.js";import"./ActiveShapeUtils-DdIRCGmC.js";import"./useEffectiveDataKey-ydzJPEOM.js";import"./Cross-Bnmd-8yp.js";import"./Rectangle-CtlT2XYk.js";import"./util-Dxo8gN5i.js";import"./Sector-B6aReDRK.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
