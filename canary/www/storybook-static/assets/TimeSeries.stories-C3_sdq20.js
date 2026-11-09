import{R as e}from"./iframe-CMDkES_H.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B5q3F6Uy.js";import{R as h}from"./zIndexSlice-CEXNkTXm.js";import{C as g}from"./ComposedChart-AN7xQ-23.js";import{L as x}from"./Line-Cw74JevM.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Vem8QkvK.js";import{T as V}from"./Tooltip-kAPsWdL8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-KTct3My8.js";import"./Layer-Dxo4pAJK.js";import"./resolveDefaultProps-BBu38DQb.js";import"./Text-CXN2lt2h.js";import"./ZIndexLayer-Dr7m0amd.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./Label-DkUV91yB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./throttle-BV0akTiG.js";import"./types-BRdSNrFn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BgqFub1M.js";import"./RechartsWrapper-YdCgLXYS.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./Curve-lt9C0hSq.js";import"./step-CtpAouP5.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CQKyrMQS.js";import"./ActivePoints-BkO0kzKb.js";import"./Dot-DVBxqdJG.js";import"./activeStyles-uNCwuaQZ.js";import"./useAnimationId-Br5Fw6SL.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./ErrorBarContext-DWVCzs9M.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./getRadiusAndStrokeWidthFromDot-DhdxEzB3.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./useEffectiveDataKey-DEHLWy8h.js";import"./useElementOffset-CfLeRl1x.js";import"./uniqBy-CBQHwdan.js";import"./iteratee-DQxlQ_gO.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CQ724W_w.js";import"./Rectangle-B0Yk3Jnp.js";import"./util-Dxo8gN5i.js";import"./Sector-CpmtdMyq.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
