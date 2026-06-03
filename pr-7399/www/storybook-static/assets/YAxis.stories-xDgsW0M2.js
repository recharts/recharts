import{c as t}from"./iframe-CSdIsBuA.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-ONZy-yVZ.js";import{g as h}from"./zIndexSlice-Cwyv9NeI.js";import{L as A}from"./LineChart-inO9b87E.js";import{a as w}from"./Coordinate-CcdTesrj.js";import{C as x}from"./CartesianGrid-Dw20LUYN.js";import{X as f}from"./XAxis-4daNYmE3.js";import{L as E}from"./Legend-DFucR75K.js";import{L as n}from"./Line-B5eG26iw.js";import{T as v}from"./Tooltip-CkPyY4_E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Duntrb6V.js";import"./CartesianAxis-DbuOwL9w.js";import"./Layer-B_G2sVc2.js";import"./resolveDefaultProps-DILKQm8l.js";import"./Text-B3fnIIS6.js";import"./DOMUtils-BrUe4Qn6.js";import"./isWellBehavedNumber-C3OI8iVg.js";import"./Label-BjSFKFzq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0Yli8nf.js";import"./index-Cpoemtz2.js";import"./index-DE5N2T-X.js";import"./types-Ct8C6hXI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B5Ptxudq.js";import"./immer-DsufihQm.js";import"./RechartsWrapper-B89fPpLO.js";import"./index-BTvkQKhU.js";import"./index-Bec9HE3p.js";import"./axisSelectors-BnFkCmMm.js";import"./d3-scale-B9s2XGKQ.js";import"./CartesianChart-Bk8EQL3g.js";import"./chartDataContext-BUAn3ipS.js";import"./CategoricalChart-DbkFDn9v.js";import"./Symbols-DWBKfXb_.js";import"./symbol-Dm9Ttk9X.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CamefvjE.js";import"./uniqBy-c8DwMnql.js";import"./iteratee-iXPsg142.js";import"./Curve-CKKHwC-M.js";import"./step-w2kxUIwB.js";import"./ReactUtils-BhhiwOUg.js";import"./ActivePoints-DxvB2SaA.js";import"./Dot-DEg4e3iy.js";import"./RegisterGraphicalItemId-DM7h7YxF.js";import"./ErrorBarContext-BgoP0PAw.js";import"./GraphicalItemClipPath-DPD0FrgU.js";import"./SetGraphicalItem-D2hWeYSE.js";import"./useAnimationId-B6008U_B.js";import"./getRadiusAndStrokeWidthFromDot-DJfd0kAV.js";import"./ActiveShapeUtils-9x_mtGFa.js";import"./Cross-68XoTZWG.js";import"./Rectangle-CPwzoQtY.js";import"./Sector-DUNjai2t.js";const Kt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Kt as default};
