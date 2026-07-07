import{R as t}from"./iframe-blo479ea.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CbVMh33A.js";import{R as h}from"./zIndexSlice-B-NboAfn.js";import{L as A}from"./LineChart-BY0vK5WD.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D3R3TJGT.js";import{X as f}from"./XAxis-D2AMCCh6.js";import{L as E}from"./Legend-DskkCuwn.js";import{L as n}from"./Line-BBbdtddm.js";import{T as v}from"./Tooltip-BDAfNzXY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cbfv_t23.js";import"./Layer-C26T8E2g.js";import"./resolveDefaultProps-d-c_EfmU.js";import"./Text-CjpmWysE.js";import"./DOMUtils-Tw2iKYp4.js";import"./isWellBehavedNumber-vMDquOd-.js";import"./Label-CXH82xbV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2I4OO_bH.js";import"./index-5Xauv1a1.js";import"./index-DwOveEH0.js";import"./types-CAFMP27K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSEoRhRT.js";import"./throttle-CAybpjPd.js";import"./RechartsWrapper-DZW1xtMc.js";import"./index-Bk8DAVsF.js";import"./index-D98VNpy1.js";import"./axisSelectors-BsWadBKB.js";import"./d3-scale-D5iAOdDh.js";import"./CartesianChart-QYdWDySw.js";import"./chartDataContext-Dkqb0EXV.js";import"./CategoricalChart-B3UrSPAC.js";import"./Symbols-CwWjLN1R.js";import"./symbol-CKhYuu_e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BGtnydeq.js";import"./uniqBy-D6JbqUwU.js";import"./iteratee-BEFCGUB5.js";import"./Curve-2n5H6-9L.js";import"./step-D2-UZcK5.js";import"./AnimatedItems-Bj_FYwBV.js";import"./useAnimationId-NeumBkdx.js";import"./ActivePoints-y80Iu2pf.js";import"./Dot-BqQZbjFP.js";import"./RegisterGraphicalItemId-D8SJKJaD.js";import"./ErrorBarContext-C5s-a9Tb.js";import"./GraphicalItemClipPath-BMIU9EC2.js";import"./SetGraphicalItem-DxPgsw5M.js";import"./getRadiusAndStrokeWidthFromDot-Bz6_dvfT.js";import"./ActiveShapeUtils-DIyj0lNk.js";import"./Cross-Be4tHzb7.js";import"./Rectangle-Dw2-Tgnj.js";import"./util-Dxo8gN5i.js";import"./Sector-D9BNr1er.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
