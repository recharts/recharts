import{R as e}from"./iframe-Cuc-3wmn.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BqOzDVbT.js";import{R as h}from"./zIndexSlice-BsVN3Oy1.js";import{C as g}from"./ComposedChart-CD6T7lY1.js";import{L as x}from"./Line-AdV0akim.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BS_R9TF_.js";import{T as V}from"./Tooltip-BOZ61CcI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-D_D6u5e-.js";import"./Layer-D8rIily6.js";import"./resolveDefaultProps-DeE8fKkX.js";import"./Text-BXtcMZ2N.js";import"./pageBackground-DrpZqn_y.js";import"./isWellBehavedNumber-BQdzkgjM.js";import"./useId-CpeFYMDs.js";import"./useBackwardsCompatibleTheme-Cg1iNggS.js";import"./Label-CIwD5k1e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LfSwjZQ4.js";import"./index-Dr1iXWUa.js";import"./index-DGxMJQlb.js";import"./types-GMU9tJsf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BXySsU0c.js";import"./throttle-BHv1OzUd.js";import"./index-Dz3k4zem.js";import"./index-Do_NM7xQ.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-DM_2WB9O.js";import"./RechartsWrapper-3cu-hXPY.js";import"./index-CYT75Ewh.js";import"./CartesianChart-C6H_Qcxl.js";import"./chartDataContext-B7_SZBh7.js";import"./CategoricalChart-DrO7g7YL.js";import"./Curve-DkDc-div.js";import"./step-DLRB17DG.js";import"./path-DyVhHtw_.js";import"./activeStyles-CdxeGYpW.js";import"./useAnimationId-BpVC87C1.js";import"./dataEntryStyles-BJ1Gca6t.js";import"./ActivePoints-CVhx80tt.js";import"./Dot-DyPF6Lbp.js";import"./ErrorBarContext-DdAUPC4x.js";import"./GraphicalItemClipPath-SJq0vZIV.js";import"./SetGraphicalItem-CaNq7kdy.js";import"./getRadiusAndStrokeWidthFromDot-iwqqPDMx.js";import"./ActiveShapeUtils-CkArj8ub.js";import"./useEffectiveDataKey-rVy1qnot.js";import"./useElementOffset-DWSWPlh_.js";import"./uniqBy-miHMS1-h.js";import"./iteratee-DHIVVYG7.js";import"./Cross-Bh1B-flk.js";import"./Rectangle-jrOmvPnS.js";import"./util-Dxo8gN5i.js";import"./Sector-wjDHcoKV.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
