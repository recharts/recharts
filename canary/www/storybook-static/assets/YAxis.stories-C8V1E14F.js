import{R as t}from"./iframe-ZSAsyeui.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-89VrmUc2.js";import{R as h}from"./zIndexSlice-Dv-5_8A6.js";import{L as A}from"./LineChart-DhUc6OWZ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CFdrtYzo.js";import{X as f}from"./XAxis-CE4c8ci4.js";import{L as E}from"./Legend-9Op2aHKd.js";import{L as i}from"./Line-DtZqeDqI.js";import{T as v}from"./Tooltip-BD-lHZ6w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ooeO0hBy.js";import"./Text-BRlBLGWa.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./throttle-D-BJc2jV.js";import"./axisSelectors-B8o8U7qV.js";import"./d3-scale-CC-JJjQv.js";import"./CartesianAxis-BLajEobP.js";import"./Layer-DRoxmpYI.js";import"./types-DmKiIpv6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BzidFlVd.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./Symbols-fzhinMEB.js";import"./symbol-fTzakvJ7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BLZ2FwPy.js";import"./uniqBy-CsraS7fO.js";import"./iteratee-BRq8WylV.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Czqktp7G.js";import"./step-agpXYCOV.js";import"./LabelList-Xwc-TPit.js";import"./ActivePoints-BfGk3pVb.js";import"./Dot-BEWDPMal.js";import"./activeStyles-BfRigOWz.js";import"./useAnimationId-DVzTYwao.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./ErrorBarContext-Cg5WWOob.js";import"./SetGraphicalItem-BULml3ZG.js";import"./getRadiusAndStrokeWidthFromDot-RjCFhzne.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./useEffectiveDataKey-DWBa4tvD.js";import"./Cross-CbPqnaha.js";import"./Rectangle-Buh2szsq.js";import"./util-Dxo8gN5i.js";import"./Sector-5mywfZ-i.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Mt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
