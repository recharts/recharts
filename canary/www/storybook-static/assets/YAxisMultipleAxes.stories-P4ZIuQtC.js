import{R as t}from"./iframe-Ba761dAt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BGJzMLCA.js";import{R as l}from"./zIndexSlice-QfUsSAvl.js";import{C as x}from"./ComposedChart-xz85xxXO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BgPPVS0F.js";import{L as a}from"./Line-Bm1u625u.js";import{X as c}from"./XAxis-BFSA3F3Y.js";import{T as g}from"./Tooltip-l28RSMhn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Dp6wkVSq.js";import"./Layer-B5w5vx75.js";import"./resolveDefaultProps-BbsZGrBO.js";import"./Text-CN68nsih.js";import"./DOMUtils-BwEbS88Q.js";import"./isWellBehavedNumber-DtdZYAzd.js";import"./Label-BnOVxmge.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DN2jzfCT.js";import"./index-CD7Kt9vJ.js";import"./index-CQZXBhnc.js";import"./types-0dL2Niha.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C9WcFyVD.js";import"./throttle-DM8vz_S7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bka_uKoY.js";import"./index-DNu-VFbT.js";import"./index-jmRPS8ks.js";import"./axisSelectors-Cn6pQrFe.js";import"./d3-scale-MektT9AZ.js";import"./CartesianChart-BhhNM2dx.js";import"./chartDataContext-CIdWR6fk.js";import"./CategoricalChart-B2LsRV82.js";import"./tooltipContext-B9wJY5wt.js";import"./AnimatedItems-DBRlvqN4.js";import"./useAnimationId-Bb4M1zTw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bb2j6FkB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SxPaImaJ.js";import"./RegisterGraphicalItemId-BoJDveOV.js";import"./ErrorBarContext-kfdlWhVC.js";import"./GraphicalItemClipPath-CD6E6U12.js";import"./SetGraphicalItem-c2dU8YzM.js";import"./getZIndexFromUnknown-Bhvl5aqy.js";import"./graphicalItemSelectors-DdJlLUk9.js";import"./Curve-mQomw5g8.js";import"./step-Bh181Pvp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BxdWxMht.js";import"./Dot-DfAT_SUP.js";import"./getRadiusAndStrokeWidthFromDot-DNi5zXue.js";import"./useElementOffset-zcMD2hVj.js";import"./uniqBy-CHlYBrF5.js";import"./iteratee-BskgW_tl.js";import"./Cross-DbO4vA7X.js";import"./Sector-DkRqKnrn.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
