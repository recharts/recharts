import{R as t}from"./iframe-CMZSuYAp.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BePyX93F.js";import{R as h}from"./zIndexSlice-BruTJuC3.js";import{L as A}from"./LineChart-BBOWIYqs.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-04-StGWM.js";import{X as f}from"./XAxis-CUiAOeYD.js";import{L as E}from"./Legend-sRNs97z9.js";import{L as n}from"./Line-B6VYMrpo.js";import{T as v}from"./Tooltip-KNIhxc5-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BCaCchRD.js";import"./Layer-PNP6wOOP.js";import"./resolveDefaultProps-B0_6d4zr.js";import"./Text-xzZ1BXQ5.js";import"./DOMUtils-DG37HfTO.js";import"./isWellBehavedNumber-BkL4thK4.js";import"./Label-x_pt0DNK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DF-_v_ST.js";import"./index-DNwfsXU8.js";import"./index-iarf_UZv.js";import"./types-DeGC_ypX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CgdBaRrD.js";import"./throttle-BOp5gWf6.js";import"./RechartsWrapper-eOuVxhlh.js";import"./index-okdZjd57.js";import"./index-Ctl2PZQv.js";import"./axisSelectors-DIqIj73B.js";import"./d3-scale-BPlmUZUy.js";import"./CartesianChart-DKmMg594.js";import"./chartDataContext-Bl7GQ-j4.js";import"./CategoricalChart-BFWxbb2w.js";import"./Symbols-CDbIn1ya.js";import"./symbol-Jz5i-Ey-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dc7Z0JxF.js";import"./uniqBy-BS_FhwG0.js";import"./iteratee-B0piW2Hj.js";import"./Curve-UdXe1NTi.js";import"./step-WDNwu-cb.js";import"./AnimatedItems-CkwT5Z0M.js";import"./useAnimationId-CGAH057_.js";import"./ActivePoints-DwWUSI4v.js";import"./Dot-vmVm3ZeK.js";import"./RegisterGraphicalItemId-C5vUvxmu.js";import"./ErrorBarContext-DSf1j3Db.js";import"./GraphicalItemClipPath-Du3KiDeu.js";import"./SetGraphicalItem-9lTbvLuA.js";import"./getRadiusAndStrokeWidthFromDot-MO9qDoqv.js";import"./ActiveShapeUtils-Dd6ng2Wf.js";import"./Cross-CzjZmQ29.js";import"./Rectangle-CYKkt_YU.js";import"./util-Dxo8gN5i.js";import"./Sector-DINHvntr.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
