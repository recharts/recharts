import{R as t}from"./iframe-kr7fVjhm.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BoMreVA5.js";import{R as h}from"./zIndexSlice-BZPaZoVE.js";import{L as A}from"./LineChart-DAaRd2c5.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BAZ3UDYA.js";import{X as f}from"./XAxis-DuCvvYgu.js";import{L as E}from"./Legend-DaaANHpW.js";import{L as n}from"./Line-6cFMEXcZ.js";import{T as v}from"./Tooltip-bxKE_UI1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Clowvj21.js";import"./CartesianAxis-BtEPbzKb.js";import"./Layer-BpeNKyUn.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./Label-BzX4e21C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DgDl0x_M.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./types-BF09pdOO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./throttle-D_awpPCx.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./Symbols-KemAPzJP.js";import"./symbol-eaW9wbCt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CARKZxzP.js";import"./uniqBy-DyaTa3fk.js";import"./iteratee-Bt60GMeU.js";import"./Curve-B0z7kkbw.js";import"./step-DhEFjA1U.js";import"./AnimatedItems-DqhNqm_F.js";import"./useAnimationId-D5l55oDh.js";import"./ActivePoints-DGPf_3U2.js";import"./Dot-B_HKYeQ3.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getRadiusAndStrokeWidthFromDot-ow-LYvhf.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./Cross-DndRbCrP.js";import"./Rectangle-DH_b4CsR.js";import"./util-Dxo8gN5i.js";import"./Sector-CM7mo4dd.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
