import{R as t}from"./iframe-C0ZUsupJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DiMOUlNc.js";import{R as h}from"./zIndexSlice-OijFhdu6.js";import{L as A}from"./LineChart-veCy0sHV.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-rH1uqcF0.js";import{X as f}from"./XAxis-CEau4At0.js";import{L as E}from"./Legend-BfLB5vxU.js";import{L as n}from"./Line-GWKTyGlv.js";import{T as v}from"./Tooltip-CllFbgj2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DKb0zYvY.js";import"./CartesianAxis-CRBuloTO.js";import"./Layer-BvM0W8cF.js";import"./resolveDefaultProps-CFzFI254.js";import"./Text-Rgvblv2w.js";import"./DOMUtils-C2N7ljjM.js";import"./isWellBehavedNumber-DY6SAaVJ.js";import"./Label-zyObFa2R.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BTGgoWh-.js";import"./index-CWmFnIlt.js";import"./index-qQ2Np5IV.js";import"./types-BB9QSyE9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CdGxqG4t.js";import"./throttle-C0jUqI7U.js";import"./RechartsWrapper-BP4cUW8r.js";import"./index-DMeIlV1g.js";import"./index-TZ5Clshf.js";import"./axisSelectors-DBehuelT.js";import"./d3-scale-Cab4s2n5.js";import"./CartesianChart-SF4H61CS.js";import"./chartDataContext-DULpfCbg.js";import"./CategoricalChart-BnZfW2OJ.js";import"./Symbols-B_Nb5BWp.js";import"./symbol-h31kQWcA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXpEJJ9m.js";import"./uniqBy-CHbMoB0U.js";import"./iteratee-DUmd7r17.js";import"./Curve-Dx8uylpR.js";import"./step-Bvy6aUz4.js";import"./AnimatedItems-BucsPXo8.js";import"./useAnimationId-gV_9QBVg.js";import"./ActivePoints-CcGnfgvg.js";import"./Dot-BLe5foEI.js";import"./RegisterGraphicalItemId-kZ3u-TBa.js";import"./ErrorBarContext-CryOhevP.js";import"./GraphicalItemClipPath-CYUXkmtT.js";import"./SetGraphicalItem-BrVQB63z.js";import"./getRadiusAndStrokeWidthFromDot-C4MEnK3i.js";import"./ActiveShapeUtils-qSpTYyL4.js";import"./Cross-3JVi-ZEh.js";import"./Rectangle-D83EpkfQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Bn8GGJMt.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
