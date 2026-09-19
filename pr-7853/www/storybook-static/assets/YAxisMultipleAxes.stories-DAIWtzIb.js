import{R as t}from"./iframe-BrTyBnwX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-7FQTDhMx.js";import{R as l}from"./zIndexSlice-fCAjIC-s.js";import{C as x}from"./ComposedChart-D5HBBFyd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gGBeGH01.js";import{L as a}from"./Line-DkNRiu0X.js";import{X as c}from"./XAxis-D80iBJd5.js";import{T as g}from"./Tooltip-CnYao60F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BmV3H-Sw.js";import"./Text-BiFKA33F.js";import"./resolveDefaultProps-pdBcEa5m.js";import"./DOMUtils-DAEkqOho.js";import"./isWellBehavedNumber-yFPwar6M.js";import"./useId-DsdbKPS3.js";import"./useBackwardsCompatibleTheme-DZwZ5sQ-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CRDOSP7u.js";import"./index-Bv6_RxtD.js";import"./index-COio-J2v.js";import"./RechartsWrapper-BNiYksGw.js";import"./axisSelectors-CsVFdpc7.js";import"./throttle-DoecO86t.js";import"./d3-scale-BBCERD4_.js";import"./index-6bvANrWw.js";import"./index-CY5SFnak.js";import"./renderedTicksSlice-BfFRGBwT.js";import"./index-DWzY76B7.js";import"./CartesianAxis-MCmd_z9-.js";import"./Layer-DXlWYKjQ.js";import"./types-CIyrEG5X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C4EYf5JO.js";import"./chartDataContext-C8snCbmL.js";import"./CategoricalChart-C8btz5qd.js";import"./AnimatedItems-Cw_YQpsP.js";import"./useAnimationId-CQ1-fLBA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTkuHm2X.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DenUl92R.js";import"./tooltipContext-ljtSCTLF.js";import"./RegisterGraphicalItemId-NAciwQoL.js";import"./ErrorBarContext-ESvWnAE_.js";import"./GraphicalItemClipPath-DJrsjfnr.js";import"./SetGraphicalItem-eWJRfUVz.js";import"./getZIndexFromUnknown-DyE58usS.js";import"./useGraphicalItemIdentity-CTGe8VwY.js";import"./Curve-C0Njno5j.js";import"./step-DqmVBTvC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DGnEStBQ.js";import"./Dot-BNzrtaBE.js";import"./getRadiusAndStrokeWidthFromDot-Ds0TVCkG.js";import"./useElementOffset--cAF1-jX.js";import"./uniqBy-Du3jwSkV.js";import"./iteratee-D1qs-y5A.js";import"./Cross-Cf32k8Oy.js";import"./Sector-ypcmG6Bl.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
