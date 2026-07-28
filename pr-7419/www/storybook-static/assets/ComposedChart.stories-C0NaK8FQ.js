import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,H as a,J as o,Q as s,R as c,Rt as l,Vn as u,W as d,X as f,ct as p,it as m,kn as h,ot as g,t as _,u as v}from"./iframe-BiMB5Acc.js";import{p as y,t as b}from"./data-J2vpPkF6.js";import{r as x}from"./Page-C0w_0_Yr.js";import{n as S,t as C}from"./utils-4uF5A2JM.js";import{n as w,t as T}from"./ComposedChartArgs-f-9wms1F.js";var E,D,O,k,A,j,M,N,P;e((()=>{E=t(n()),b(),_(),w(),S(),D={argTypes:T,component:v},O={render:e=>E.createElement(u,{width:`100%`,height:300},E.createElement(v,{...e,data:x,margin:{top:20,right:20,bottom:20,left:20}},e.children))},k={name:`Simple Chart`,...O,args:{...C(T),data:x,children:E.createElement(E.Fragment,null,E.createElement(o,{type:`monotone`,dataKey:`amt`,fill:`#8884d8`,stroke:`#8884d8`}),E.createElement(d,{dataKey:`uv`}),E.createElement(f,{dataKey:`pv`}))}},A={...O,args:{...C(T),data:x,children:E.createElement(E.Fragment,null,E.createElement(i,{dataKey:`name`,scale:`band`}),E.createElement(c,null),E.createElement(h,{layout:`vertical`,align:`right`,verticalAlign:`middle`}),E.createElement(s,{stroke:`#f5f5f5`}),E.createElement(o,{type:`monotone`,dataKey:`amt`,fill:`#8884d8`,stroke:`#8884d8`}),E.createElement(d,{dataKey:`uv`,fill:`#ff7300`}),E.createElement(d,{dataKey:`pv`,barSize:20,fill:`#413ea0`}),E.createElement(g,{x:`Page C`,stroke:`red`,label:`Max PV PAGE`}),E.createElement(m,{x:`Page C`,y:1300,stroke:`red`}),E.createElement(p,null,E.createElement(r,null,E.createElement(f,{dataKey:`uv`,stroke:`#ff7300`,dot:!1}))),E.createElement(l,null))}},j={...O,args:{...C(T),data:x,children:E.createElement(E.Fragment,null,E.createElement(i,{dataKey:`name`}),E.createElement(c,null),E.createElement(h,{layout:`vertical`,align:`right`,verticalAlign:`middle`}),E.createElement(s,{stroke:`#f5f5f5`}),E.createElement(o,{type:`monotone`,dataKey:`amt`,fill:`#8884d8`,stroke:`#8884d8`}),E.createElement(f,{type:`monotone`,dataKey:`uv`,stroke:`#ff7300`}),E.createElement(d,{dataKey:`pv`,barSize:20,fill:`#413ea0`}),E.createElement(a,{dataKey:`pv`,fill:`red`}),E.createElement(p,null),E.createElement(l,null))}},M={...O,args:{...C(T),data:x,children:E.createElement(E.Fragment,null,E.createElement(i,null),E.createElement(c,null),E.createElement(h,null),E.createElement(s,{stroke:`#f5f5f5`}),E.createElement(d,{dataKey:`pv`,barSize:20,fill:`#413ea0`}),E.createElement(f,{type:`monotone`,dataKey:`pv`,stroke:`#ff7300`}),E.createElement(l,null))}},N={render:e=>E.createElement(`div`,{style:{width:`600px`}},E.createElement(`p`,null,`A ComposedChart of time scale`),E.createElement(u,{width:`100%`,height:500},E.createElement(`div`,{className:`composed-chart-wrapper`},E.createElement(v,{width:600,height:400,data:e.timeData,margin:{top:20,right:20,bottom:20,left:20}},E.createElement(s,{stroke:`#f5f5f5`}),E.createElement(i,{dataKey:`x`,domain:[e.from.getTime(),e.to.getTime()],scale:`time`,type:`number`,tick:{fontSize:10,fill:`red`},tickFormatter:e=>e.toLocaleString(`en-GB`,{timeZone:`UTC`,dateStyle:`medium`})}),E.createElement(c,null),E.createElement(h,null),E.createElement(o,{type:`monotone`,dataKey:`y`,fill:`#8884d8`,stroke:`#8884d8`}),E.createElement(d,{dataKey:`y`,barSize:20,fill:`#413ea0`}),E.createElement(f,{type:`monotone`,dataKey:`y`,stroke:`#ff7300`}),E.createElement(l,null))))),args:{...C(T),from:new Date(`2019-07-04T00:00:00.000Z`),to:new Date(`2019-07-10T00:00:00.000Z`),timeData:y,data:x}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Simple Chart',
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" />
        <Line dataKey="pv" />
      </>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" fill="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceDot x="Page C" y={1300} stroke="red" />
        <Brush>
          <LineChart>
            <Line dataKey="uv" stroke="#ff7300" dot={false} />
          </LineChart>
        </Brush>
        <Tooltip />
      </>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Scatter dataKey="pv" fill="red" />
        <Brush />
        <Tooltip />
      </>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis />
        <YAxis />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
        <Tooltip />
      </>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const tickFormatter = (tick: Date) => {
      return tick.toLocaleString('en-GB', {
        /*
         * Forced timezone so that our visual diff renders the same for all contributors.
         * In real app you will probably leave timeZone undefined
         */
        timeZone: 'UTC',
        dateStyle: 'medium'
      });
    };
    return <div style={{
      width: '600px'
    }}>
        <p>A ComposedChart of time scale</p>
        <ResponsiveContainer width="100%" height={500}>
          <div className="composed-chart-wrapper">
            <Composed width={600} height={400} data={args.timeData} margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="x" domain={[args.from.getTime(), args.to.getTime()]} scale="time" type="number" tick={{
              fontSize: 10,
              fill: 'red'
            }} tickFormatter={tickFormatter} />
              <YAxis />
              <Legend />
              <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="y" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" />
              <Tooltip />
            </Composed>
          </div>
        </ResponsiveContainer>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData
  }
}`,...N.parameters?.docs?.source}}},P=[`API`,`ComplexChart`,`LineBarAreaScatter`,`LineBarHorizontal`,`LineBarAreaScatterTimeScale`]}))();export{k as API,A as ComplexChart,j as LineBarAreaScatter,N as LineBarAreaScatterTimeScale,M as LineBarHorizontal,P as __namedExportsOrder,D as default};