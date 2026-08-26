import{R as t}from"./iframe-JCMHkfpO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-OgBkmni0.js";import{R as l}from"./zIndexSlice-Cbic3BON.js";import{C as x}from"./ComposedChart-BVs57za7.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-iHbY3BeT.js";import{L as a}from"./Line-WjI1QEi3.js";import{X as c}from"./XAxis-CBMMNbSw.js";import{T as g}from"./Tooltip-D2bj6ONv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DgnjH2BN.js";import"./Text-H5O9sMOg.js";import"./resolveDefaultProps-CNbvqjMv.js";import"./DOMUtils-lO18r89G.js";import"./isWellBehavedNumber-K1PO631O.js";import"./useId-5LAcqd5g.js";import"./useBackwardsCompatibleTheme-BlAxrm86.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZJzCe6C.js";import"./index-D8yPwBIb.js";import"./index-Ds8zJsBP.js";import"./RechartsWrapper-nbVSXC9z.js";import"./index-Bt8eCKRM.js";import"./index-QEaCAJHN.js";import"./throttle-DlFFEpQV.js";import"./axisSelectors-BpNs_jFY.js";import"./d3-scale-BsjeCU8L.js";import"./renderedTicksSlice-BRnimtTJ.js";import"./CartesianAxis-B0p8oTh4.js";import"./Layer-DW0R6u6Q.js";import"./types-CrNZa3RP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Be_k-GK6.js";import"./chartDataContext-DRtbDYDE.js";import"./CategoricalChart-Do9lblK2.js";import"./AnimatedItems-dkTJaSWs.js";import"./useAnimationId-CtDYtQmo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVC8ePoO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-2F7jkNpt.js";import"./tooltipContext-CL6dgCT6.js";import"./RegisterGraphicalItemId-DyknErxM.js";import"./ErrorBarContext-IV7IvqZh.js";import"./GraphicalItemClipPath-BifFhr-e.js";import"./SetGraphicalItem-BPezHgiz.js";import"./getZIndexFromUnknown-DGgMVHgw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DK76v1qR.js";import"./Curve-YTzEjIYa.js";import"./step-CcEA6ZtU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2ZGk6hG.js";import"./Dot-CefwgMiR.js";import"./getRadiusAndStrokeWidthFromDot-Bo70O2Eq.js";import"./useElementOffset-BrBzv7lz.js";import"./uniqBy-DRqYT5l3.js";import"./iteratee-T-3V0feC.js";import"./Cross-DP-DTtms.js";import"./Sector-Duv1HULw.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
