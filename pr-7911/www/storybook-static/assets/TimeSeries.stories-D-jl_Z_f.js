import{R as e}from"./iframe-DM7I_Yyj.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C9bS5ZnW.js";import{R as h}from"./zIndexSlice-fCEc0s5F.js";import{C as g}from"./ComposedChart-C0efLOGA.js";import{L as x}from"./Line-BuB5QTku.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BeCTSUmZ.js";import{T as V}from"./Tooltip-wMX0pxjV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CnfqwB17.js";import"./Layer-BuDBFoKe.js";import"./resolveDefaultProps-juvHZLkB.js";import"./Text-BHb-71ue.js";import"./DOMUtils-x3LNgLWi.js";import"./isWellBehavedNumber-CD6T6Jdg.js";import"./useId-Cqy_j9lJ.js";import"./useBackwardsCompatibleTheme-ZcFSMvkr.js";import"./Label-D7T4Ye9K.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKb6XHFw.js";import"./index-tOsCsIz0.js";import"./index-BSGAosA0.js";import"./types-C2i2rvmz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D73l8EHs.js";import"./throttle-D9z--FMJ.js";import"./index-BPHh1qic.js";import"./index-CtbzcRhJ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-8avap2Ow.js";import"./axisSelectors-C4a64MXg.js";import"./index-1HyAGRae.js";import"./CartesianChart-BtvlbeE8.js";import"./chartDataContext-Bv5z90Vo.js";import"./CategoricalChart-DChxHazb.js";import"./Curve-DCsdrtWm.js";import"./step-BWu1v0QN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bps8ucZ8.js";import"./useAnimationId-ByMoBfgF.js";import"./ActivePoints-6ohdy_Z2.js";import"./Dot-C28FoeNl.js";import"./RegisterGraphicalItemId-CHv-hOW4.js";import"./ErrorBarContext-u65-Bu8d.js";import"./GraphicalItemClipPath-ByPtBGRG.js";import"./SetGraphicalItem-BuE0ytWh.js";import"./getRadiusAndStrokeWidthFromDot-Bx2TZeXM.js";import"./ActiveShapeUtils-C8wHq7T4.js";import"./useGraphicalItemIdentity-w6WnNdhF.js";import"./useElementOffset-D2TnO8Yd.js";import"./uniqBy-DrK2h0sx.js";import"./iteratee-CmV4JHhh.js";import"./Cross-BMb4vV30.js";import"./Rectangle-NFBvjCpj.js";import"./util-Dxo8gN5i.js";import"./Sector-DMgWea_s.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
