import{R as t}from"./iframe-fRQcLAl5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B2vH-p_Z.js";import{R as l}from"./zIndexSlice-Dn-AwdFU.js";import{C as x}from"./ComposedChart-EXBPqiIb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DKbQwku4.js";import{L as a}from"./Line-DpSpydaT.js";import{X as c}from"./XAxis-YHoN4cJ8.js";import{T as g}from"./Tooltip-ByfooWk2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B-GmpToQ.js";import"./Text-Cru6BjP5.js";import"./resolveDefaultProps-BSRNeAis.js";import"./pageBackground-CEHLL-Ei.js";import"./isWellBehavedNumber-D73y1wlb.js";import"./useId-C-HGw4dN.js";import"./useBackwardsCompatibleTheme-BHb08z9X.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs8fSrLZ.js";import"./index-k5JxmCtc.js";import"./index-DGdlAhFZ.js";import"./dataEntryStyles-DAJ1H5Ij.js";import"./axisSelectors-BcHvjcBD.js";import"./throttle-D9yJ7HBS.js";import"./d3-scale-DfAPImNq.js";import"./CartesianAxis-KAWGVqFX.js";import"./Layer-CbRW8QEs.js";import"./types-9LI4VHBg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-odeO7S.js";import"./index-CvX2HSRN.js";import"./index-BMhLMrsl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-UgoWSvvL.js";import"./index-0uuwnO43.js";import"./CartesianChart-78VpV4en.js";import"./chartDataContext-DbJ6pwXa.js";import"./CategoricalChart-BOoKbn6G.js";import"./activeStyles-mU47mh7y.js";import"./useAnimationId-BA218cv-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEwZ1key.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DqrHb297.js";import"./tooltipContext-DtffU0w3.js";import"./RegisterGraphicalItemId-B0TmU9i7.js";import"./ErrorBarContext-DLnk70v-.js";import"./GraphicalItemClipPath-DvSzn1zw.js";import"./SetGraphicalItem-fs95wN3Y.js";import"./getZIndexFromUnknown-BqqPCCOA.js";import"./useEffectiveDataKey-H8Jal8DL.js";import"./omit-BJDvkQHv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CS-yaUma.js";import"./step-CpSFtT8B.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D7vn9lL2.js";import"./Dot-CoF5eEMQ.js";import"./getRadiusAndStrokeWidthFromDot-BW7yBTjT.js";import"./useElementOffset-BrWRK1of.js";import"./uniqBy-CluqMtWA.js";import"./iteratee-CLrT16T3.js";import"./Cross-Cp9Y6JoO.js";import"./Sector-CIORA0ys.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
