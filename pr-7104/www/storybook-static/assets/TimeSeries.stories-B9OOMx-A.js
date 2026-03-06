import{e}from"./iframe-B_nHVd2r.js";import{X as s}from"./XAxis-CW60u556.js";import{R as y}from"./arrayEqualityCheck-DY9D726-.js";import{C as g}from"./ComposedChart-D26vWmHk.js";import{L as x}from"./Line-DeMf4hlA.js";import{R as S}from"./RechartsHookInspector-fNULTbt1.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-B9XrMCDb.js";import{T as V}from"./Tooltip-UTq_piku.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CcM516-L.js";import"./Layer-CuJ2fFlM.js";import"./resolveDefaultProps-4kbUPRd1.js";import"./Text-DiyzG_aV.js";import"./DOMUtils-DYxHXfua.js";import"./Label-Dso9Y4kd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUYIYBsc.js";import"./zIndexSlice-CcXit2BS.js";import"./immer-BI8B3IAj.js";import"./types-BNmhs72m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BzSKsfOY.js";import"./hooks-J0Oqh1od.js";import"./axisSelectors-BMRY7YQG.js";import"./RechartsWrapper-DzqzeMkT.js";import"./index-Ccd-ueyn.js";import"./CartesianChart-DEWcUEuJ.js";import"./chartDataContext-CnxSTV7I.js";import"./CategoricalChart-BQ2UlDix.js";import"./ReactUtils-DvQ3Bihg.js";import"./ActivePoints-kvA6RkM9.js";import"./Dot-Bdj5CCRw.js";import"./RegisterGraphicalItemId-DYT3txR2.js";import"./ErrorBarContext-D0DhrZWs.js";import"./GraphicalItemClipPath-rjxHDAAK.js";import"./SetGraphicalItem-BcnT6vB3.js";import"./useAnimationId-DeeI7Yuu.js";import"./getRadiusAndStrokeWidthFromDot-DJFnzptW.js";import"./ActiveShapeUtils-Bm79eQGO.js";import"./isPlainObject-Bku77CDs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsvkISRN.js";import"./Trapezoid-Bt86oLyu.js";import"./Sector-BoI-sHTN.js";import"./Symbols-DkF8brZX.js";import"./symbol-DVZ8Ov9_.js";import"./step-DYOoDPDf.js";import"./Curve-RQsVLKEt.js";import"./index-D4ywjx6k.js";import"./ChartSizeDimensions-CZvd_Zg7.js";import"./OffsetShower-8fEwfkJg.js";import"./PlotAreaShower-DdlKlbvs.js";import"./useElementOffset-C3UWFn_c.js";import"./uniqBy-Co66ylAO.js";import"./iteratee-BX1xRums.js";import"./Cross-DbZKvBdu.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
