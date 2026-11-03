import{R as e}from"./iframe-BC6iQeUr.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-8wiG-IT7.js";import{R as h}from"./zIndexSlice-DwuZ2Ow7.js";import{C as g}from"./ComposedChart-Bivk-oUr.js";import{L as x}from"./Line-yiqo5pDE.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Daj11TvY.js";import{T as V}from"./Tooltip-B6SSATs-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-eBXlpwXS.js";import"./Layer-Cuu8DjLO.js";import"./resolveDefaultProps-DIZ3ps7e.js";import"./Text-fEDBC_0o.js";import"./DOMUtils-B8TR7nYh.js";import"./ZIndexLayer-DCc79hxk.js";import"./index-D3yqD8af.js";import"./index-CYTdWqrV.js";import"./Label-BCMvROnb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-mzCge1J3.js";import"./throttle-MiaNLFmz.js";import"./types-Dwpv4Yth.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BGFaFbR8.js";import"./index-D34_hmzU.js";import"./index-DraKlH0s.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Bd1LmNHc.js";import"./RechartsWrapper-DHIomU5i.js";import"./index-B7dOZ4Mr.js";import"./fillDefinitions-B6DkeJW_.js";import"./CartesianChart-BLRdoMZg.js";import"./ZIndexPortal-jmLjufPW.js";import"./CategoricalChart-9j6tsrvq.js";import"./Curve-BvPWva0Q.js";import"./step-DPNt-X3R.js";import"./path-DyVhHtw_.js";import"./LabelList-BFjn3eEm.js";import"./ActivePoints-JuUDd9nh.js";import"./Dot-DyLV3zJ_.js";import"./activeStyles-DfgAGK4N.js";import"./useAnimationId-Cw69Pi1k.js";import"./dataEntryStyles-BFig0g5r.js";import"./Symbols-DBa5o5yK.js";import"./symbol-BvmQmKKh.js";import"./ErrorBarContext-uhSKqamS.js";import"./SetGraphicalItem-CqMMnBeb.js";import"./getRadiusAndStrokeWidthFromDot-DQip5ZIl.js";import"./ActiveShapeUtils-DxbJ9fQI.js";import"./useEffectiveDataKey-Bk74mtUJ.js";import"./useElementOffset-k-LXptTs.js";import"./uniqBy-CV8NSfie.js";import"./iteratee-Q-eBNyZk.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DSJzht9z.js";import"./Rectangle-CNYq4UQO.js";import"./util-Dxo8gN5i.js";import"./Sector-B7q2mBx3.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
