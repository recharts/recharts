import{R as t}from"./iframe-OYo09Kjn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B9J5xeR5.js";import{R as l}from"./zIndexSlice-C0otV0Tq.js";import{C as x}from"./ComposedChart-O8l7FYsv.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gTTOrVYU.js";import{L as a}from"./Line-OzMS9cmg.js";import{X as c}from"./XAxis-C4iNCAUT.js";import{T as g}from"./Tooltip-0pT-eWlS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BLd_HfLL.js";import"./Text-Dl7WOzrI.js";import"./resolveDefaultProps-BV2Pd4xr.js";import"./DOMUtils-VDBzCn3R.js";import"./ZIndexLayer-fjsdvpte.js";import"./index-B1YAqRON.js";import"./index-jR8-nOeq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-h48S2J0z.js";import"./throttle-2ukkMEiH.js";import"./axisSelectors-DwbFlqn_.js";import"./d3-scale-CkZT7Yna.js";import"./CartesianAxis-Ce7EujIW.js";import"./Layer-BKQ7Cq1e.js";import"./types-CzskQIcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dj299CQx.js";import"./index-D6UCrPx5.js";import"./index-OFmsSHfS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DDeqrE6g.js";import"./index-C9mjTPMA.js";import"./fillDefinitions-DyAhyaHy.js";import"./CartesianChart-CU1owHvq.js";import"./ZIndexPortal-THJMy4l1.js";import"./CategoricalChart-reFCYYlz.js";import"./LabelList-D8hIzv9X.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Br8BuzQ0.js";import"./useAnimationId-Bfw_1I20.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DsFWfn7B.js";import"./tooltipContext-CYMqnwB3.js";import"./dataEntryStyles-CwKCb_eK.js";import"./ErrorBarContext-Dht0z-3r.js";import"./activeStyles-By7c-_I7.js";import"./SetGraphicalItem-C2cjU4L3.js";import"./getZIndexFromUnknown-CsgPkce_.js";import"./useEffectiveDataKey-BkqAzi9W.js";import"./omit-BovP7YlK.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DVj7Kjw7.js";import"./step-DXZ6DTgl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-YU9mNETr.js";import"./Dot-BVDEoTVF.js";import"./Symbols-DShbzJAN.js";import"./symbol-CmMsv7zq.js";import"./getRadiusAndStrokeWidthFromDot-BexLXBfB.js";import"./useElementOffset-DmtR-dee.js";import"./uniqBy-CaC20Hzh.js";import"./iteratee-B2qJ-Z7i.js";import"./Cross-BX7lI3Sj.js";import"./Sector-CKiS8YLH.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
