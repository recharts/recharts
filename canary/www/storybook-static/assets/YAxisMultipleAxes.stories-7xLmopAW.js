import{R as t}from"./iframe-C-D94QkC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-gSjGcUn4.js";import{R as l}from"./zIndexSlice-BKwIbV_L.js";import{C as x}from"./ComposedChart-B8BsA69h.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-oPfR9M-J.js";import{L as a}from"./Line-CdnILgMU.js";import{X as c}from"./XAxis-CUwTyuxs.js";import{T as g}from"./Tooltip-C4QZOuVo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DdUGRqEL.js";import"./Layer-CmhR3M6w.js";import"./resolveDefaultProps-I0oO3hVe.js";import"./Text-BGLH01e4.js";import"./DOMUtils-CTJUeuSO.js";import"./isWellBehavedNumber-CW3dwjTv.js";import"./Label-CEdJYykS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0m4rTFg.js";import"./index-BIeQrv2Z.js";import"./index-CTfmrlJH.js";import"./types-BVMbYXvi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DheIhU3o.js";import"./throttle-2piy3LIT.js";import"./RechartsThemeContext-FU4W4bTr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-C8SdZUxr.js";import"./index-CVumJag_.js";import"./index-Dq3qqcGT.js";import"./axisSelectors-RkZJ2biJ.js";import"./d3-scale-DDXy3r7j.js";import"./CartesianChart-DbK0sv1B.js";import"./chartDataContext-BuH_IHSv.js";import"./CategoricalChart-ChFoWP6Y.js";import"./tooltipContext-DC1yWL3Z.js";import"./AnimatedItems-CNnKFhUF.js";import"./useAnimationId-Qux1tHbm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbIEjk7Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-mVYQLGWO.js";import"./RegisterGraphicalItemId-BEroCjsR.js";import"./ErrorBarContext-xYFd4kf3.js";import"./GraphicalItemClipPath-D86AO83t.js";import"./SetGraphicalItem-D38tmZrb.js";import"./getZIndexFromUnknown-DUi7QXhQ.js";import"./graphicalItemSelectors-B-svnAv6.js";import"./Curve-CdyB7qtw.js";import"./step-C--YvIRl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DZjXqzdI.js";import"./Dot-BeDd8SJ_.js";import"./getRadiusAndStrokeWidthFromDot-B5yZBW7E.js";import"./useElementOffset-DvCPVQU2.js";import"./uniqBy-Dbcfcj0B.js";import"./iteratee-DSgJFqTf.js";import"./Cross-DBoiUStt.js";import"./Sector-BRY6nb6Y.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
