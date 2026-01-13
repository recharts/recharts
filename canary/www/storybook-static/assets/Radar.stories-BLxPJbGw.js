import{e}from"./iframe-CjUtT138.js";import{g as i}from"./utils-ePvtT4un.js";import{A as c}from"./AnimationProps-CWko-cer.js";import{R as s}from"./Radar-uUaoDcq5.js";import{R as d}from"./arrayEqualityCheck-B-tT2ESq.js";import{R as m}from"./RadarChart-DoH3IBV_.js";import{P as p}from"./PolarGrid-CPrGUUSa.js";import{P as u}from"./PolarAngleAxis-JVFXGXcE.js";import{P as f}from"./PolarRadiusAxis-BrdTHw2i.js";import{R as y}from"./RechartsHookInspector-BSSs4sC-.js";import{s as h}from"./Page-DPte-9pC.js";const a={dataKey:{description:"The key of a group of data which should be unique in a radar chart.",table:{type:{summary:"string | number | Function"},category:"General"}},points:{description:"The coordinates of all the vertexes of the radar shape, like [{ x, y }].",table:{type:{summary:"Array"},category:"General"}},dot:{description:`If false set, dots will not be drawn. If true set, dots will be drawn which have
    the props calculated internally. If object set, dots will be drawn which have the props merged
    by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element.
    If set a function, the function will be called to render customized dot.`,table:{type:{summary:"Bool | Object | Element | Function"},defaultValue:{summary:!1},category:"General"}}},b={label:{description:`If set a string or a number, default label will be drawn, and the option is content.
    If set a React element, the option is the custom react element of drawing label. If set a function,
    the function will be called to render customized label.`,table:{type:{summary:"string | number | ReactElement | Function"},defaultValue:{summary:!1},category:"Label"}}},g={shape:{description:`If set a ReactElement, the shape of dot can be customized. If set a function,
    the function will be called to render customized shape.`,table:{type:{summary:"ReactElement | Function"},category:"Style"}}},R={argTypes:{...c,...a,...b,...g,legendType:{description:"The type of icon in legend. If set to 'none', no legend item will be rendered.",table:{type:{summary:"line | plainline | square | rect| circle | cross | diamond | square | star | triangle | wye | none"},defaultValue:"rect",category:"Style"}}},component:s},t={render:l=>e.createElement(d,{width:"100%",height:500},e.createElement(m,{cx:"50%",cy:"50%",outerRadius:"80%",data:h,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,null),e.createElement(u,{dataKey:"subject"}),e.createElement(f,null),e.createElement(s,{...l}),e.createElement(y,null))),args:{...i(a),dataKey:"A",name:"Mike",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6,dot:!0},parameters:{controls:{include:Object.keys(a)}}};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={subjectData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar {...args} />
          <RechartsHookInspector />
        </RadarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    dataKey: 'A',
    name: 'Mike',
    stroke: '#8884d8',
    fill: '#8884d8',
    fillOpacity: 0.6,
    dot: true
  },
  parameters: {
    controls: {
      include: Object.keys(GeneralProps)
    }
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const w=["General"],v=Object.freeze(Object.defineProperty({__proto__:null,General:t,__namedExportsOrder:w,default:R},Symbol.toStringTag,{value:"Module"}));export{t as G,v as R};
