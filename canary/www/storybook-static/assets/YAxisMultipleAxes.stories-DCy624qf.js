import{R as t}from"./iframe-CKQALtMh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-qP5Po20_.js";import{R as l}from"./zIndexSlice-DfJvDCP6.js";import{C as x}from"./ComposedChart-B57mEn44.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gWQRt7Py.js";import{L as a}from"./Line-CTa1vzcP.js";import{X as c}from"./XAxis-B1w-DAje.js";import{T as g}from"./Tooltip-DBFe6s2m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CkbIGog0.js";import"./Text-DyEflBvv.js";import"./resolveDefaultProps-Bte-Mlhe.js";import"./DOMUtils-CBXByqiO.js";import"./isWellBehavedNumber-B4yKamKp.js";import"./useId-DvyhJk_e.js";import"./useBackwardsCompatibleTheme-Bv93_XfL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Crva3HCE.js";import"./index-DtLHkBI_.js";import"./index-D_AzU2dp.js";import"./RechartsWrapper-C-mneK7p.js";import"./axisSelectors-BxBnek0X.js";import"./throttle-CNY-gU5B.js";import"./d3-scale-CKl8FJgi.js";import"./index-DzcUKgoB.js";import"./index-B2SRoqlS.js";import"./renderedTicksSlice-CPhSvJpG.js";import"./index-YCl9Eg2B.js";import"./CartesianAxis-D4n_YP7-.js";import"./Layer-B9JOU9_x.js";import"./types-CDJ3ls6u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-RyjjLogs.js";import"./chartDataContext-DKpOqV2G.js";import"./CategoricalChart-BidV4bcI.js";import"./AnimatedItems-DTXdR5ab.js";import"./useAnimationId-CKMmFYBQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CY_2zxpD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CE5-o2on.js";import"./tooltipContext-DUJFLpBZ.js";import"./RegisterGraphicalItemId-C8MFR-IS.js";import"./ErrorBarContext-rH9p4zIJ.js";import"./GraphicalItemClipPath-CinvHRPZ.js";import"./SetGraphicalItem-DsCqUb4K.js";import"./getZIndexFromUnknown-Cmaa_Ckd.js";import"./useGraphicalItemIdentity-DFDwkf_7.js";import"./dataEntryStyles-B35Ms32v.js";import"./Curve-BfhgeL_q.js";import"./step-D4hLR-8L.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B_BVBzV5.js";import"./Dot-Bwc0vAX6.js";import"./getRadiusAndStrokeWidthFromDot-DxuuP8od.js";import"./useElementOffset-DRkOZJXl.js";import"./uniqBy-9yJLU1-D.js";import"./iteratee-jIVZW5Io.js";import"./Cross-r29ZOzL2.js";import"./Sector-Bemb-3hf.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
