import{R as t}from"./iframe-D0XP5FT3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CqyPAKzA.js";import{R as l}from"./zIndexSlice-D8-60lXw.js";import{C as x}from"./ComposedChart-CmUditNM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_iNq178.js";import{L as a}from"./Line-B9I3Ywm0.js";import{X as c}from"./XAxis-CdyvwiuA.js";import{T as g}from"./Tooltip-DfbbT9hH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CLcGGCVq.js";import"./Text-D0tua1LJ.js";import"./resolveDefaultProps-DjekxJOz.js";import"./DOMUtils-CiVsTIiM.js";import"./isWellBehavedNumber-Ceh04LdS.js";import"./useId-CfurG6Ob.js";import"./useBackwardsCompatibleTheme-CnQkr5Gq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CZS0piq5.js";import"./index-BIEuecVB.js";import"./index-CS8PxtTR.js";import"./RechartsWrapper-BDDfTGvW.js";import"./axisSelectors-D4AJEAvo.js";import"./throttle-z8Ap2dYF.js";import"./d3-scale-DGDSvNHr.js";import"./index-C2YY5PF9.js";import"./index-D5oWhNFN.js";import"./renderedTicksSlice-BOt15qXr.js";import"./index-a0gINIJJ.js";import"./CartesianAxis-DAZGCNlj.js";import"./Layer-Bdc6UUg3.js";import"./types-C9t2smuM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B85ukqJW.js";import"./chartDataContext-BcyL-ikw.js";import"./CategoricalChart-w8Ip9gJm.js";import"./AnimatedItems-BLak8TNm.js";import"./useAnimationId-DjrvOMwt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bjcm2Wl_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Da2wOC1_.js";import"./tooltipContext-BE5TOI6g.js";import"./RegisterGraphicalItemId-HdNBGK70.js";import"./ErrorBarContext-IzNwiufM.js";import"./GraphicalItemClipPath-iiifM8JF.js";import"./SetGraphicalItem-CSNZjUhi.js";import"./getZIndexFromUnknown-CnVILsAO.js";import"./useGraphicalItemIdentity-DszFn3dP.js";import"./dataEntryStyles-B0aWZ42d.js";import"./Curve-IiThPwuE.js";import"./step-dzRymlPB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BDZ1Wot0.js";import"./Dot-slsYh-CE.js";import"./getRadiusAndStrokeWidthFromDot-Cl1UrcqK.js";import"./useElementOffset-rZOrtiK6.js";import"./uniqBy-C2z33t4d.js";import"./iteratee-Dzag0UZB.js";import"./Cross-D-5nrYoo.js";import"./Sector-DITvzxdC.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
