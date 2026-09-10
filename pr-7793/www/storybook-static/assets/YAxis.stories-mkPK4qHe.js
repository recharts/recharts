import{R as t}from"./iframe-DozjnQY4.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DKlfhRHH.js";import{R as h}from"./zIndexSlice-BgkLcB6R.js";import{L as A}from"./LineChart-C9tA7bxa.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Ce4aDBTK.js";import{X as f}from"./XAxis-CMLACdRu.js";import{L as E}from"./Legend-D7-pVV-n.js";import{L as i}from"./Line-DBFiZ6tT.js";import{T as v}from"./Tooltip-CA3U6Xvo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-zwFJYypc.js";import"./Text-CYg0PxB3.js";import"./resolveDefaultProps-CVm2MzcI.js";import"./DOMUtils-12JScs07.js";import"./isWellBehavedNumber-pk6AjLe8.js";import"./useId-CoUbJimw.js";import"./useBackwardsCompatibleTheme-ZiWSCSRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BfyW3t5T.js";import"./index-C_fPCGUJ.js";import"./index-DvODWZUZ.js";import"./RechartsWrapper-CsvSe4fO.js";import"./axisSelectors-DgS41G-2.js";import"./throttle-ja6YfGso.js";import"./d3-scale-DiLIb41e.js";import"./index-B-gAWTo9.js";import"./index-55Hv9cWy.js";import"./renderedTicksSlice-eosOC0PP.js";import"./index-CQZmeOSf.js";import"./CartesianAxis-VBiFHU3A.js";import"./Layer-DqTc2vWN.js";import"./types-BbIJv7s_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C23oYJhj.js";import"./chartDataContext-BMMD7dGr.js";import"./CategoricalChart-cz-sFoBH.js";import"./Symbols-B5tB_r3v.js";import"./symbol-DkoFJi3o.js";import"./path-DyVhHtw_.js";import"./useElementOffset-q9rliSht.js";import"./uniqBy-DDhkZRqQ.js";import"./iteratee-BypAlLeG.js";import"./Curve-cLiU8AJA.js";import"./step-DFSUgzDE.js";import"./AnimatedItems-DN24URVz.js";import"./useAnimationId-Dn8df37H.js";import"./ActivePoints-B8JQwmYC.js";import"./Dot-8Z6kgu22.js";import"./RegisterGraphicalItemId-DbLQfc-G.js";import"./ErrorBarContext-Ure7iGoK.js";import"./GraphicalItemClipPath-CB6u2457.js";import"./SetGraphicalItem-Ba3q6rOQ.js";import"./getRadiusAndStrokeWidthFromDot-m20kiUFK.js";import"./ActiveShapeUtils-DQCdFpwN.js";import"./useGraphicalItemIdentity-BMnjEDTs.js";import"./Cross-DuDDKu83.js";import"./Rectangle-lcraYYmO.js";import"./util-Dxo8gN5i.js";import"./Sector-Cp9Bbwf1.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
