import{R as t}from"./iframe-CCZR7NAh.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-r76EBGup.js";import{R as h}from"./zIndexSlice-RhYtObCh.js";import{L as A}from"./LineChart-CXrz16_J.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-JOf8V8Ln.js";import{X as f}from"./XAxis-BRz9nr_h.js";import{L as E}from"./Legend-CMYhydZc.js";import{L as i}from"./Line-ByOfnKwX.js";import{T as v}from"./Tooltip-gceL_MjA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-A6NnUU-m.js";import"./Text-BNhIgYfP.js";import"./resolveDefaultProps-DBU-kSsr.js";import"./DOMUtils-BDfLWNCh.js";import"./isWellBehavedNumber-Csif_Eh7.js";import"./useId-BL2vel-5.js";import"./useBackwardsCompatibleTheme-DIkjfI7E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RJSSngl5.js";import"./index-tWW1_YSW.js";import"./index-B_5iXp8A.js";import"./RechartsWrapper-wkc56maS.js";import"./axisSelectors-BSioHzmv.js";import"./throttle-ZP6rSZKd.js";import"./d3-scale-CU88JBPJ.js";import"./index-CQgQjfRf.js";import"./index-Cn7KliQr.js";import"./renderedTicksSlice-D9smLeXW.js";import"./index-1iFFgL5n.js";import"./CartesianAxis-DqSvII5H.js";import"./Layer-B2yEt3nd.js";import"./types-BX41f3Nu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BL5MVgQu.js";import"./chartDataContext-DSMzrBHe.js";import"./CategoricalChart-thtv_Ll2.js";import"./Symbols-BuAuRUDz.js";import"./symbol-iszy4Ia-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dp3BrIi0.js";import"./uniqBy-CvvHfEZU.js";import"./iteratee-9vsqmnl8.js";import"./Curve-7ikXqYG-.js";import"./step-CvhyldGl.js";import"./AnimatedItems-C_k0o8_C.js";import"./useAnimationId-DJLlQPal.js";import"./ActivePoints-Dj4SzkHH.js";import"./Dot-CnbUvxwO.js";import"./RegisterGraphicalItemId-U6F3LrJb.js";import"./ErrorBarContext-j9HbImdV.js";import"./GraphicalItemClipPath-eRrs6_re.js";import"./SetGraphicalItem-DoozTt-Y.js";import"./getRadiusAndStrokeWidthFromDot-DBCpafJP.js";import"./ActiveShapeUtils-DgHvx5XO.js";import"./useGraphicalItemIdentity-BWyXW6pi.js";import"./Cross-DwxM3WoF.js";import"./Rectangle-CQGbjjmX.js";import"./util-Dxo8gN5i.js";import"./Sector-4D-ijm9Z.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
