import{R as t}from"./iframe-Dofq_iQ-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CNyofDE0.js";import{R as l}from"./zIndexSlice-D1WV8xVK.js";import{C as x}from"./ComposedChart-CsQfk666.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-lPvfRB9Z.js";import{L as a}from"./Line-CxMmNUAz.js";import{X as c}from"./XAxis-BAcN42ay.js";import{T as g}from"./Tooltip-D82JgkIu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-hlz0weoU.js";import"./Text-DvhWb0Oj.js";import"./resolveDefaultProps-Z787kyQ6.js";import"./pageBackground-jkmkuUi_.js";import"./useId-Dit2o_XD.js";import"./ZIndexLayer-CuuRUF_K.js";import"./index-BtkEod5i.js";import"./index-37WXqDMb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CmsaI3Cf.js";import"./throttle-DKmFrtnD.js";import"./dataEntryStyles-BZNZhw1g.js";import"./axisSelectors-CqE-voO2.js";import"./d3-scale-Bd78fIJ9.js";import"./CartesianAxis-BkbAUDQ6.js";import"./Layer-DmIM376f.js";import"./types-B7VCcYuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DEI5ubGX.js";import"./index-qZlNdlLA.js";import"./index-Bsj9Z6Q4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CETzgtk4.js";import"./index-CYB006td.js";import"./CartesianChart-D36QcNNB.js";import"./chartDataContext-B2bZJU-K.js";import"./CategoricalChart-DTaKLLfl.js";import"./activeStyles-B73KwGvD.js";import"./useAnimationId-CwELIUBQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ywvlgolw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-R-VNi4BZ.js";import"./tooltipContext-BvG4NH35.js";import"./RegisterGraphicalItemId-DtelKBLL.js";import"./ErrorBarContext-D73mtL4f.js";import"./SetGraphicalItem-DU742dNa.js";import"./getZIndexFromUnknown-Lvxe1hvE.js";import"./useEffectiveDataKey-B7xEEKli.js";import"./omit-whIyt7SZ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Beatw8ZQ.js";import"./step-g7A04fAl.js";import"./path-DyVhHtw_.js";import"./ActivePoints--oTriwIr.js";import"./Dot-CgHFserM.js";import"./Symbols-BSqZO71K.js";import"./symbol-3INanWh5.js";import"./getRadiusAndStrokeWidthFromDot-BcCSCHB7.js";import"./useElementOffset-B6c3R0Fo.js";import"./uniqBy-pKrPA6ZI.js";import"./iteratee-eczRew1O.js";import"./Cross-_ZcP0GkJ.js";import"./Sector-fCNxang1.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
