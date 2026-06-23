import{R as t}from"./iframe-DQmeeGiA.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BSQK2YTa.js";import{R as h}from"./zIndexSlice-vj7A5RkB.js";import{L as A}from"./LineChart-Dx7BfYFb.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D1MIA-G4.js";import{X as f}from"./XAxis-CPOb-1qE.js";import{L as E}from"./Legend-C01_CC6W.js";import{L as n}from"./Line-BWR_fQDK.js";import{T as v}from"./Tooltip-C6MCJIIJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D0YgmYSp.js";import"./CartesianAxis-CsI9VW1t.js";import"./Layer-C92GpBxv.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./Label-DLumr0gz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LS7m1tXW.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./types-BWqAEvBR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./immer-CuM-_qKB.js";import"./RechartsWrapper-D3uqokgy.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./CategoricalChart-D7Ayh5uN.js";import"./Symbols-uMOogOnn.js";import"./symbol-BWzlkA2r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Duwsc3QZ.js";import"./uniqBy-KqLhsUPy.js";import"./iteratee-B34lqcgr.js";import"./Curve-BSCksJ2p.js";import"./step-B5y8ObV2.js";import"./AnimatedItems-DSodAZpf.js";import"./useAnimationId-VbcZ3sEu.js";import"./ActivePoints-CeLiAPaS.js";import"./Dot-DKRonFKw.js";import"./RegisterGraphicalItemId-Bgc1uwdC.js";import"./ErrorBarContext-aN2SYuw4.js";import"./GraphicalItemClipPath-BWRZakeV.js";import"./SetGraphicalItem-CiXKqcwE.js";import"./getRadiusAndStrokeWidthFromDot-AjrfEp5x.js";import"./ActiveShapeUtils-CHmC6EYX.js";import"./Cross-RQft4sJ7.js";import"./Rectangle-Bsb4rUs5.js";import"./util-Dxo8gN5i.js";import"./Sector-CjffYPJE.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
